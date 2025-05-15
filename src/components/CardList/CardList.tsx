import React, { useState, useEffect } from 'react';
import Card, { type CardData } from '../Card/Card';


interface UserFromApi {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
  };
}

const CardList: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0); 

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const enrichedUsers = data.map((user: UserFromApi) => ({
          ...user,
          imageUrl: './img/avatar_1.png',
          title: 'Senior Product Designer',
          aboutMe:
            "Hi, I'm a final year student completing a bachelor's In information Technology in QUT, with experience. We are the company behind the wildly successful DIY channel 5-Minute Crafts, the inspirational and creative channel Bright Side.",
        }));
        setCards(enrichedUsers);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An unknown error occurred.");
        }
        console.error("Failed to fetch cards:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [cards.length]); 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const currentCard = cards[currentCardIndex]; 

  return (
    <div>
      {currentCard && ( 
        <Card
                  key={currentCard.id}
                  name={currentCard.name}
                  email={currentCard.email}
                  phone={currentCard.phone}
                  address={currentCard.address}
                  imageUrl={currentCard.imageUrl}
                  title={currentCard.title}
                  aboutMe={currentCard.aboutMe} id={0}        />
      )}
    </div>
  );
};

export default CardList;