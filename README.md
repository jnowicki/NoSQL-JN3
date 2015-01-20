# Wstęp
## Tytuł
Zadanie nr3, przykłady użycia funkcji mapReduce w MongoDB
## Komputer
* Procesor: Intel Core i5-3230M CPU @ 2.60GHz 4-rdzeniowy
* Pamięć RAM: 8GB
* Dysk Twardy: 1TB
* System Operacyjny: Windows 7 Professional SP1

## Software
* MongoDB w wersji 2.8.0 rc0
* Windows PowerShell

# Zadania

## Zadanie 3a

"Przygotować funkcje map i reduce, które wyszukają wszystkie anagramy w pliku word_list.txt"

### Importowanie

Najpierw przerobiłem plik word_list na csv i dodałem header "word", następnie zaimportowałem listę komendą:
~~~
$sw = [Diagnostics.Stopwatch]::StartNew()
./mongoimport -d db -c wordlist --type csv --file word_list.csv --headerline
$sw.Stop()
~~~

![import](screenshots/import.png) <br />

Dane na temat kolekcji:

![wordlistSize](screenshots/wordlistSize.png) <br />

### Map Reduce

Pisząc algorytm do anagramów zainspirowałem się metodą znalezioną na [Stack Overflow](http://stackoverflow.com/questions/19600442/anagram-algorithm-using-a-hashtable-and-or-tries). Skrypt można znaleźć [tutaj](anagramScript1.js).

~~~
$sw = [Diagnostics.Stopwatch]::StartNew()
.\mongo.exe anagramScript1.js
$sw.Stop()
$sw.Elapsed
~~~

Bardzo krótki czas działania skryptu:

![mapReduce](screenshots/mapReduce.png) <br />

Przykładowe anagramy:

![anagrams](screenshots/anagrams.png) <br />

## Zadanie 3b

"Przygotować funkcje map i reduce, które wyszukają najczęściej występujące słowa z Wikipedia data PL aktualny plik z artykułami, ok. 1.3 GB"

