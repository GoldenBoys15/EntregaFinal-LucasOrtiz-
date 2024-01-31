import { React, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const oneItem = doc(db, "productos", `${id}`);
                const snapshot = await getDoc(oneItem);

                if (snapshot.exists()) {
                    const docData = snapshot.data();
                    setItem(docData);
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching document: ", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    );
}

export default ItemDetailContainer;
