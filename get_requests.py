import os
import sqlite3
import requests
import json
import pandas as pd


API_KEY = os.getenv('API_KEY')
API_URL = 'https://api.calorieninjas.com/v1/nutrition?query='


def fetch_grocery_list_from_db(database_path):
    """Fetches grocery list from a given database."""
    conn = sqlite3.connect(database_path)
    cursor = conn.cursor()
    query = "SELECT item_name FROM grocery_table" 
    cursor.execute(query)
    items = [row[0] for row in cursor.fetchall()]
    conn.close()
    return items


def query_get(item):
    """Queries the API for nutritional information."""
    response = requests.get(API_URL + item, headers={'X-Api-Key': API_KEY})
    if response.status_code == requests.codes.ok:
        return response.text
    else:
        print("Error:", response.status_code, response.text)
        return None


def go_over_groceries(grocery_list):
    """Convert to csv to read into python later"""
    items_data = []
    for grocery in grocery_list:
        response = query_get(grocery)
        items_data.extend(response["items"])
    return pd.DataFrame(items_data)


def main():
    # CHANGE TO ACTUAL PATH ****
    grocery_list = fetch_grocery_list_from_db('path_to_the_database_file.db')
    df = go_over_groceries(grocery_list)
    df.to_csv('nutrition_data.csv', index=False)


if __name__ == "__main__":
    main()
