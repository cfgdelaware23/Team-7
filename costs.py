import pandas as pd
import folium
from folium.plugins import HeatMap
import webbrowser

def clean_csv(file_name):
    df = pd.read_csv(file_name)
    has_nan = df.isna().any().any()
    if has_nan:
        print(f"Has NaN values: {has_nan}")
        df.dropna(inplace=True)
    return df

df = clean_csv('receipt.csv')

food_items = ['beef_price_1lb', 'bread_price_loaf', 'tomato_price', 'potato_price', 
              'orange_price', 'lettuce_price', 'milk_price', 'strawberries_price', 
              'banana_price', 'eggs_price']

df['avg_food_price'] = df[food_items].mean(axis=1)

latitudes = df['latitude'].tolist()
longitudes = df['longitude'].tolist()
avg_prices = df['avg_food_price'].tolist()

map_center = [sum(latitudes) / len(latitudes), sum(longitudes) / len(longitudes)]
m = folium.Map(location=map_center, zoom_start=10)

heat_data = [[lat, lng, price] for lat, lng, price in zip(latitudes, longitudes, avg_prices)]

HeatMap(heat_data).add_to(m)

m.save('heatmap.html')
webbrowser.open('heatmap.html')
