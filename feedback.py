import random

items = ["carrots", "bread", "milk", "eggs", "cheese", "apples", "oranges", "chocolate", "coffee", "tea"]
visits = []

for _ in range(10):
    random_items = random.sample(items, random.randint(1, len(items)))
    visits.append(random_items)

def get_feedback_from_visit():
    random_visit = random.choice(visits)
    random_item = random.choice(random_visit)

    feedback = input(f"How was the {random_item} you bought last time? (good/bad) ")
    print(f"Thank you for your feedback on the {random_item}.\n")

    print("Your receipt from the selected visit:")
    for item in random_visit: 
        print(f"- {item}")

get_feedback_from_visit()