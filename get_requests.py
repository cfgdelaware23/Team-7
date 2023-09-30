import os
import sqlite3
import requests
import json


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
    """Loops over grocery items and fetches their nutritional information."""
    items_data = {"items": []}
    for grocery in grocery_list:
        response_text = query_get(grocery)
        if response_text:
            response = json.loads(response_text)
            items_data["items"].append(response["items"][0])
    return items_data


def main():
    #grocery_list = fetch_grocery_list_from_db('database.db')
    response = go_over_groceries(grocery_list)
    print(response)


if __name__ == "__main__":
    main()
