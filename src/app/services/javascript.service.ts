import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JavascriptService {
  constructor() {}

  findLongestWordLength(str: string) {
    let words = str.split(' ');
    let largestWord = '';
    for (let word in words) {
      if (words[word].length >= largestWord.length) {
        largestWord = words[word];
      }
    }
    console.log(largestWord);
    return largestWord.length;
  }

  confirmEnding(str: string, target: string) {
    return str.slice(str.length - target.length, str.length) === target;
  }

  repeatStringNumTimes(str: string, num: number) {
    if (num < 1) return '';

    let response = '';
    while (num > 0) {
      response += str;
      num--;
    }
    return response;
  }

  truncateString(str: string, num: number) {
    if (str.length < num) return str;
    const response = str.slice(num, str.length) + '...';
    return response;
  }

  titleCase(str: string) {
    let words = str.split(' ');
    let response = '';
    for (let i = 0; i < words.length; i++) {
      response += words[i].charAt(0).toUpperCase() + words[i].slice(1) + ' ';
    }
    return response.trim();
  }

  getIndexToIns(arr: [], num: number) {
    arr.sort(function (a, b) {
      return a - b;
    });

    for (var a = 0; a < arr.length; a++) {
      if (arr[a] >= num) return a;
    }

    return arr.length;
  }

  mutation(arr: any) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }

  isPalindrome(text: string) {
    return text === text.split('').reverse().join('');
  }
}
