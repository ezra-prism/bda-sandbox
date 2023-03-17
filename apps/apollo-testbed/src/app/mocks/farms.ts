export interface House {
  id: string; // guid
  name: string;
  houses?: House[];
}
export interface Farm {
  id: string; // guid
  name: string;
  expanded: boolean;
  houses?: House[];
}
// a list of farms (id:guid, name:string)
export const MOCK_FARM_DATA: Farm[] = [
  {
    id: '1',
    name: 'Farm 1',
    expanded: false,
    houses: [
      { id: '1', name: 'House 1' },
      { id: '2', name: 'House 2' },
      { id: '3', name: 'House 3' },
      { id: '4', name: 'House 4' },
    ],
  },
  {
    id: '2',
    name: 'Farm 2',
    expanded: false,
    houses: [
      { id: '5', name: 'House 5' },
      { id: '6', name: 'House 6' },
      { id: '7', name: 'House 7' },
    ],
  },
  {
    id: '3',
    name: 'Farm 3',
    expanded: false,
    houses: [
      { id: '8', name: 'House 8' },
      { id: '9', name: 'House 9' },
      { id: '10', name: 'House 10' },
      { id: '11', name: 'House 11' },
      { id: '12', name: 'House 12' },
      { id: '13', name: 'House 13' },
      { id: '14', name: 'House 14' },
      { id: '15', name: 'House 15' },
      { id: '16', name: 'House 16' },
      { id: '17', name: 'House 17' },
      { id: '18', name: 'House 18' },
      { id: '19', name: 'House 19' },
      { id: '20', name: 'House 20' },
    ],
  },
];
