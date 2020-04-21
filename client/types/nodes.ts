
type Node = {
  id: string;
  parentId: string;
  category: {
    id: string;
    name: string;
  };
  type: {
    id: string;
    name: string;
  };
  name: string;
  address: string;
  hidden: boolean;
  zoomLevel: number;
  coordinates: {
    lat: number;
    lng: number;
    dynamic: boolean;
  };
  updated: number;
  created: number;
};

export default Node;
