import random

class GroceryStore:
    def __init__(self):
        self.visits = []

    def visit_store(self, items_bought):
        if self.visits:
            past_visit = random.choice(self.visits)
            item_for_feedback = random.choice(past_visit)
            feedback = input(f"How was the {item_for_feedback} you bought last time? (good/bad) ")
            print(f"Thank you for your feedback on the {item_for_feedback}. You mentioned it was {feedback}.")

        self.visits.append(items_bought)
        print("Items added to your shopping list:", ', '.join(items_bought))

    def get_past_visits(self):
        return self.visits

store = GroceryStore()
while True:
    items_bought = input("Enter items bought today separated by commas: ").split(',')
    items_bought = [item.strip() for item in items_bought]
    store.visit_store(items_bought)
    
    cont = input("Do you wish to simulate another visit? (yes/no) ").lower()
    if cont == 'no':
        break
