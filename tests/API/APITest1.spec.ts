import { test, expect, request } from '@playwright/test';
import { Category, Client, ICategory, IPet, ITag, Pet, PetStatus, Tag } from '../../APIClient/tsclient';

test.use({ baseURL: 'https://catfact.ninja' });
//test.use({ extraHTTPHeaders: { Accept: 'test', Authorization: `token ${process.env.API_TOKEN}` } });

test('should return cat fact', async ({ request }) => {
  const catFact = await request.get(`/breeds`);
  expect(catFact.status()).toEqual(200);
  //expect(await catFact.json()).toContainEqual({fact: 'test'})
});

test('should use client', async ({ request }) => {
  const client = new Client();

  const categoryData: ICategory = {
    id: 1,
    name: 'Example Category',
  };
  const tagData: ITag = {
    id: 2,
    name: 'Cute',
  };
  const categoryInstance = new Category(categoryData);
  const tagInstance = new Tag(tagData);
    
  const petData: IPet = {
    id: 1,
    category: categoryInstance,
    name: 'Fluffy',
    photoUrls: ['https://example.com/fluffy.jpg'],
    tags: [tagInstance],
    status: PetStatus.Available, 
  };

  // Create a Pet instance
  const petInstance = new Pet(petData);

  const test = await client.petPost(petInstance);
  //expect(test.status()).toEqual(200);
  //expect(await catFact.json()).toContainEqual({fact: 'test'})
});
