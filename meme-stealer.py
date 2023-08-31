import requests
import json
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ET

def extract_data(article_url):
    try:
        article_response = requests.get(article_url)
        article_response.raise_for_status()
        article_soup = BeautifulSoup(article_response.content, 'html.parser')
        h1_elem = article_soup.find('h1', class_='blog-post-title')
        img_elem = article_soup.find('div', class_='blog-post-content').find('img')
        
        if img_elem and 'data-src' in img_elem.attrs:
            img = img_elem['data-src']
        else:
            img = "No Image Found"
        
        return {"text": h1_elem.text.strip() if h1_elem else "No Title Found",
                "url": img,
                "article_url": article_url}
    except requests.exceptions.RequestException as e:
        print(f"Network error while extracting data from {article_url}: {str(e)}")
    except Exception as e:
        print(f"An error occurred while extracting data from {article_url}: {str(e)}")
    return {"text": "No Title Found", "url": "No Image Found", "article_url": article_url}

def main():
    sitemap_urls = [
        "https://thecodinglove.com/post-sitemap.xml",
        "https://thecodinglove.com/post-sitemap2.xml",
        "https://thecodinglove.com/post-sitemap3.xml",
        "https://thecodinglove.com/post-sitemap4.xml",
        "https://thecodinglove.com/post-sitemap5.xml",
        "https://thecodinglove.com/post-sitemap6.xml",
        "https://thecodinglove.com/post-sitemap7.xml",
        "https://thecodinglove.com/post-sitemap8.xml"
    ]

    data = []

    for sitemap_url in sitemap_urls:
        response = requests.get(sitemap_url)
        
        if response.status_code == 200:
            print(f"Sitemap fetched successfully: {sitemap_url}")
            sitemap_content = response.content
            root = ET.fromstring(sitemap_content)

            for i, loc_elem in enumerate(root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc")):
                article_url = loc_elem.text
                print(f"Extracting data from article {i+1}: {article_url}")
                article_data = extract_data(article_url)

                if article_data:
                    data.append(article_data)
                    print(f"Data extracted from article {i+1}.")
                else:
                    print(f"Failed to extract data from article {i+1}.")

                # Append to output.json after each article
                with open('output.json', 'w') as outfile:
                    json.dump(data, outfile, indent=4)

        print("All data extracted and saved to 'output.json'")

if __name__ == "__main__":
    main()
