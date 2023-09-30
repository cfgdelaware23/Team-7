import os
import requests
import pandas as pd
from dotenv import load_dotenv
from pymongo import MongoClient

# Load environment variables from .env file
load_dotenv()

API_KEY = os.getenv('API_KEY')
API_URL = 'https://api.calorieninjas.com/v1/nutrition?query='
MONGO_URI = os.getenv('ATLAS_URI')
DB_NAME = os.getenv('DB_NAME')  

def insert_dummy_data():
    """Inserts dummy data into the MongoDB database."""
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]

    # Sample dummy data
    dummy_users = [
        {
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com",
            "purchases": ["apple", "banana", "carrot"]
        },
        {
            "firstName": "Jane",
            "lastName": "Smith",
            "email": "jane.smith@example.com",
            "purchases": ["potato", "tomato", "lettuce"]
        }
        # ... (add more dummy users as needed)
    ]

    # Insert dummy data into the 'users' collection
    db.users.insert_many(dummy_users)

    client.close()
    print("Dummy data inserted!")

# Call the function to insert dummy data
insert_dummy_data()

def get_user_by_email(email):
    """Fetches a user by email from MongoDB."""
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]

    user = db.users.find_one({"email": email})
    
    client.close()
    return user

def fetch_grocery_list_from_db(email):
    """Fetches grocery list for a specific user from MongoDB based on email."""
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]

    # Fetch the purchases of the user with the given email
    user = db.users.find_one({"email": email})

    client.close()

    if user and "purchases" in user:
        return user["purchases"]
    else:
        return []

def query_get(item):
    """Queries the API for nutritional information."""
    response = requests.get(API_URL + item, headers={'X-Api-Key': API_KEY})
    if response.status_code == requests.codes.ok:
        return response.json()
    else:
        print("Error:", response.status_code, response.text)
        return None

def go_over_groceries(grocery_list):
    """Fetch nutrition data and convert to DataFrame."""
    items_data = []
    for grocery in grocery_list:
        response = query_get(grocery)
        if response and "items" in response:
            items_data.extend(response["items"])
    return pd.DataFrame(items_data)

def main():
    email = input("Enter the email of the user: ")
    grocery_list = fetch_grocery_list_from_db(email)
    print(f"Grocery List from DB: {grocery_list}") 
    df = go_over_groceries(grocery_list)
    print(f"DataFrame:\n{df}")  
    df.to_csv('data/nutrition_data.csv', index=False)
    print("Data saved to nutrition_data.csv")  

if __name__ == "__main__":
    main()