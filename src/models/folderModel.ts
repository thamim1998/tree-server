export type Folder = {
  id: number;
  name: string;
  isFolder: boolean;
  items: Folder[];
};

// Example initial data
export let explorerData: Folder = {
  id: 1,
  name: "Root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "Folder 1",
      isFolder: true,
      items: [],
    },
    {
      id: 3,
      name: "File 1",
      isFolder: false,
      items: [],
    },
  ],
};
