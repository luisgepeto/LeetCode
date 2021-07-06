class Trie {
  private isEnd: boolean;
  private childTries: (Trie | null)[];

  constructor(isEnd?: boolean) {
    this.childTries = [...Array(26).keys()].map((k): Trie | null => {
      return null;
    });
    this.isEnd = isEnd ?? false;
  }

  insert(word: string): void {
    if (word === '') return;
    let nextTrie = this.childTries[word.charCodeAt(0) - 'a'.charCodeAt(0)];
    if (nextTrie === null) {
      nextTrie = new Trie();
      this.childTries[word.charCodeAt(0) - 'a'.charCodeAt(0)] = nextTrie;
    }
    nextTrie.isEnd = nextTrie.isEnd || word.length === 1;
    nextTrie.insert(word.substring(1));
  }

  search(word: string): boolean {
    return this.searchWithEnd(word, true);
  }

  startsWith(prefix: string): boolean {
    return this.searchWithEnd(prefix, false);
  }

  private searchWithEnd(word: string, exactMatch: boolean): boolean {
    const nextTrie = this.childTries[word.charCodeAt(0) - 'a'.charCodeAt(0)];
    if (nextTrie === null) return false;
    if (word.length === 1) return !exactMatch || nextTrie.isEnd;
    return nextTrie.searchWithEnd(word.substring(1), exactMatch);
  }
}

const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple')); // return True
console.log(trie.search('app')); // return False
console.log(trie.startsWith('app')); // return True
trie.insert('app');
trie.insert('apples');
console.log(trie.search('app')); // return True
