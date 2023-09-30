import pandas as pd
import matplotlib.pyplot as plt
from collections import Counter
from wordcloud import WordCloud

def extract_column_sum(df, column_name):
    """Extracts the sum of values from a specific column after converting to float."""
    if column_name in df.columns:
        return df[column_name].astype(float).sum()
    else:
        print(f"Warning: Column '{column_name}' not found in the DataFrame.")
        return 0.0

def plot_macro_breakdown(df):
    total_fat = extract_column_sum(df, 'fat_total_g')
    protein = extract_column_sum(df, 'protein_g')
    carbohydrates = extract_column_sum(df, 'carbohydrates_total_g')

    categories = {
        'Total Fat (g)': total_fat,
        'Protein (g)': protein,
        'Carbohydrates (g)': carbohydrates
    }
  
    plt.pie(categories.values(), labels=categories.keys(), autopct='%1.1f%%', startangle=140)
    plt.title('Nutritional Categories for Your Purchases')
    plt.axis('equal')  
    plt.savefig('assets/pie_chart.png')

def generate_word_cloud(df):
    if 'name' in df.columns:
        grocery_list = df['name']
        p = Counter(" ".join(grocery_list).split()).most_common(10)
        rslt = pd.DataFrame(p, columns=['Word', 'Frequency'])
        wordcloud_data = dict(rslt.values)

        wordcloud = WordCloud(background_color="white", width=800, height=400).generate_from_frequencies(wordcloud_data)
        plt.figure(figsize=(10, 5))
        plt.imshow(wordcloud, interpolation='bilinear')
        plt.axis("off")
        plt.savefig('assets/word_cloud.png')
    else:
        print("Warning: Column 'name' not found in the DataFrame.")

def main():
    df = pd.read_csv('data/nutrition_data.csv')
    plot_macro_breakdown(df)
    generate_word_cloud(df)

if __name__ == "__main__":
    main()
