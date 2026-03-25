import pandas as pd
import os
import faiss
import numpy as np
from sentence_transformers import SentenceTransformer

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

data_path = os.path.join(BASE_DIR,"data.csv")

index_path=os.path.join(BASE_DIR,"faiss.index")

data = pd.read_csv(data_path)

documents=[]

for _,row in data.iterrows():

    text=f"""
Location: {row['Location']}
Activities: {row['Activities']}
Food: {row['Food_and_Famous_Dishes']}
Hotels: {row['Recommended_Hotels_with_Rating_and_PriceRange']}
"""

    documents.append(text)


model=SentenceTransformer('all-MiniLM-L6-v2')


# =====================
# BUILD OR LOAD INDEX
# =====================

if os.path.exists(index_path):

    index=faiss.read_index(index_path)

else:

    embeddings=model.encode(documents,normalize_embeddings=True)

    dimension=embeddings.shape[1]

    index=faiss.IndexFlatL2(dimension)

    index.add(np.array(embeddings))

    faiss.write_index(index,index_path)



# =====================
# SEARCH FUNCTION
# =====================

def search(query,k=3):

    query_embedding=model.encode([query],normalize_embeddings=True)

    distances,indices=index.search(
        np.array(query_embedding),k
    )

    results=[]

    for i in indices[0]:

        results.append(documents[i])

    return results