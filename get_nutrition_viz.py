import pandas as pd
import matplotlib.pyplot as plt
import random
from collections import Counter
from wordcloud import WordCloud


df = pd.read_csv('nutrition.csv')
grocery_list = df['Name']

def plot_macro_breakdown():
  """
  Plots pie chart of macros in grocery list breakdown
  """
  # sum the relevant categories and convert to float (strip suffix)
  total_fat = df['Total Fat'].str.replace('g', '').astype(float).sum()
  protein = df['Protein'].str.replace('g', '').astype(float).sum()
  carbohydrates = df['Carbohydrates'].str.replace('g', '').astype(float).sum()

  categories = {
      'Total Fat': total_fat,
      'Protein': protein,
      'Carbohydrates': carbohydrates
  }

  plt.pie(categories.values(), labels=categories.keys(), autopct='%1.1f%%', startangle=140)
  plt.title('Nutritional Categories for Your Purchases')
  plt.axis('equal')  
  plt.savefig('assets/pie_chart.png')
  # plt.show()


def latest_purchases():
  """
  Compiles latest purchases and sorts them by frequency
  """
  p = Counter(" ".join(grocery_list).split()).most_common(10)
  rslt = pd.DataFrame(p, columns=['Word', 'Frequency'])
  rslt = rslt[rslt['Word'] != "Total"]
  
  return dict(rslt.values)


def generate_word_cloud():
  """
  Creates word cloud visualization of most purchased items to be bigger
  """
  wordcloud_data = latest_purchases()
  wordcloud = WordCloud(background_color="white", width=800, height=400).generate_from_frequencies(wordcloud_data)
  plt.figure(figsize=(10, 5))
  plt.imshow(wordcloud, interpolation='bilinear')
  plt.axis("off")
  plt.savefig('assets/word_cloud.png')
  # plt.show()


plot_macro_breakdown()
generate_word_cloud()
