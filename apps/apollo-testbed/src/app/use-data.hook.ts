import { useState, useEffect } from 'react';
import { MOCK_FARM_DATA } from './mocks';
import { Farm } from './mocks/farms';



export function useApolloData(legalEntityId: string) {
  const [farms, setFarms] = useState(MOCK_FARM_DATA);

  const updateData = (data: Farm[]) => {
    setFarms(data);
  }


  return [farms, updateData] as [Farm[], (data: Farm[]) => void];
}