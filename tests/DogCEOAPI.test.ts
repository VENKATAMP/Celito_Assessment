import {test,expect} from '@playwright/test';
import ENV from "../src/lib/env";

test('Test Dog CEO API @API, @both', async ({  request }) => {
  var breedsArray:string[]=[];
  let i=0
  while( i>=0){
    const response=(await request.get(ENV.apiEndPoint));
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toEqual(200);
    expect(JSON.parse((await response.body()).toString()).status).toEqual("success");
    expect(JSON.parse((await response.body()).toString()).message).toContain("breeds");
    const breedName=JSON.parse((await response.body()).toString()).message.split("/")[4]
    breedsArray.push(breedName);
    if(i>10 && breedsArray.includes(breedName)){
      expect(i).toBeGreaterThanOrEqual(10);
      expect(breedsArray.includes(breedName)).toBeTruthy();
      break;
    }
    else{
      expect(breedsArray.includes(breedName)).toBeFalsy();
    }
    i++;
  }
});