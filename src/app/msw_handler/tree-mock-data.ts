import { TreeNode } from 'primeng/api';
import { faker } from '@faker-js/faker';

export enum TreeNodeType {
  Folder = 'Folder',
  File = 'File',
  Picture = 'Picture',
  Movie = 'Movie',
}

export const treeMockData: { data: TreeNode[] } = {
  data: [
    {
      label: 'Documents',
      data: {
        ui_id: faker.database.mongodbObjectId(),
        type: TreeNodeType.Folder,
      },
      children: [
        {
          label: 'Work',
          data: {
            ui_id: faker.database.mongodbObjectId(),
            type: TreeNodeType.Folder,
          },
          children: [
            {
              label: 'Expenses.doc',
              icon: 'pi pi-file',
              data: {
                ui_id: faker.database.mongodbObjectId(),
                type: TreeNodeType.File,
              },
            },
            {
              label: 'Resume.doc',
              icon: 'pi pi-file',
              data: {
                ui_id: faker.database.mongodbObjectId(),
                type: TreeNodeType.File,
              },
            },
          ],
        },
        {
          label: 'Home',
          data: {
            ui_id: faker.database.mongodbObjectId(),
            type: TreeNodeType.Folder,
          },
          children: [
            {
              label: 'Invoices.txt',
              icon: 'pi pi-file',
              data: {
                ui_id: faker.database.mongodbObjectId(),
                type: TreeNodeType.File,
              },
            },
          ],
        },
      ],
    },
    {
      label: 'Pictures',
      data: {
        ui_id: faker.database.mongodbObjectId(),
        type: TreeNodeType.Folder,
      },

      children: [
        {
          label: 'barcelona.jpg',
          icon: 'pi pi-image',
          data: {
            ui_id: faker.database.mongodbObjectId(),
            type: TreeNodeType.Picture,
          },
        },
        {
          label: 'logo.jpg',
          icon: 'pi pi-file',
          data: {
            ui_id: faker.database.mongodbObjectId(),
            type: TreeNodeType.Picture,
          },
        },
        {
          label: 'primeui.png',
          icon: 'pi pi-image',
          data: {
            ui_id: faker.database.mongodbObjectId(),
            type: TreeNodeType.Picture,
          },
        },
      ],
    },
    {
      label: 'Movies',
      data: {
        ui_id: faker.database.mongodbObjectId(),
        type: TreeNodeType.Folder,
      },

      children: [
        {
          label: 'Al Pacino',
          data: {
            ui_id: faker.database.mongodbObjectId(),
            type: TreeNodeType.Folder,
          },
          children: [
            {
              label: 'Scarface',
              icon: 'pi pi-video',
              data: {
                ui_id: faker.database.mongodbObjectId(),
                type: TreeNodeType.Movie,
              },
            },
            {
              label: 'Serpico',
              icon: 'pi pi-file-video',
              data: {
                ui_id: faker.database.mongodbObjectId(),
                type: TreeNodeType.Movie,
              },
            },
          ],
        },
        {
          label: 'Robert De Niro',
          data: {
            ui_id: faker.database.mongodbObjectId(),
            type: TreeNodeType.Folder,
          },
          children: [
            {
              label: 'Goodfellas',
              icon: 'pi pi-video',
              data: {
                ui_id: faker.database.mongodbObjectId(),
                type: TreeNodeType.Movie,
              },
            },
            {
              label: 'Untouchables',
              icon: 'pi pi-video',
              data: {
                ui_id: faker.database.mongodbObjectId(),
                type: TreeNodeType.Movie,
              },
            },
          ],
        },
      ],
    },
  ],
};

export const treeMockLazyData: { data: TreeNode[] } = {
  data: [
    {
      label: 'Documents',
      expanded: false,
      data: {
        ui_id: faker.database.mongodbObjectId(),
        type: TreeNodeType.Folder,
      },
      leaf: false,
    },
    {
      label: 'Pictures',
      expanded: false,
      data: {
        ui_id: faker.database.mongodbObjectId(),
        type: TreeNodeType.Folder,
      },
      leaf: false,
    },
    {
      label: 'Movies',
      expanded: false,
      data: {
        ui_id: faker.database.mongodbObjectId(),
        type: TreeNodeType.Folder,
      },
      leaf: true,
    },
  ],
};

export const podViewTreeMockData: any = {
  Pod: {
    Health: 'Critical',
    Name: 'Pod Manager',
    Groups: [
      {
        Metrics: '0',
        ui_id: 'GRP-default-no-group',
        Name: 'Default',
      },
      {
        Metrics: '0',
        ui_id: 'GRP-cafb0567-8844-5754-a3e0-c97a82558153',
        Name: 'Ocean-Dont-Move',
      },
      {
        Metrics: '0',
        ui_id: 'GRP-e2bee815-ae87-5110-ba4c-b87fbdad520e',
        Name: 'Taipei-Data',
      },
      {
        Metrics: '0',
        ui_id: 'GRP-64ad81d8-15e2-5110-9024-83c64dc485f9',
        Name: 'Testing-Demo',
      },
      {
        Metrics: '0',
        ui_id: 'GRP-7e8ee6d7-0f71-5b43-8873-f6c08ec5bd77',
        Name: 'Testing Demo22',
      },
      {
        Metrics: '0',
        ui_id: 'GRP-e88f5476-235a-56e0-86cd-21fd15d60a5b',
        Name: 'aabbcc-123',
      },
      {
        Metrics: '0',
        ui_id: 'GRP-9c2007a5-6afb-500a-9eda-3ca7a432d8a3',
        Name: 'RackServer-JohnSnow',
      },
      {
        Metrics: '0',
        ui_id: 'GRP-8a45e89a-aca4-592b-b679-d420c1c5658c',
        Name: 'Test - H',
      },
      {
        Metrics: '0',
        ui_id: 'GRP-3b7ad6dd-ddb8-598f-9412-a7d4f821bcb4',
        Name: 'RackServer-mstest',
      },
    ],
  },
};
