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
