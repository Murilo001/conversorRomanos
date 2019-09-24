module Converter

type NumberTypes = 
    | UNIDADE of int
    | DEZENA of int
    | CENTENA of int
    | MILHAR of int

module ConverterRomanToNumber = 

    let convertThousands stringRoman = 
        match stringRoman with
        | stringRoman when stringRoman.StartsWith("I") -> convertUnity stringRoman
        | stringRoman when stringRoman.StartsWith("V") -> convertUnity stringRoman
        | stringRoman when stringRoman.StartsWith("X") -> true 10
        | stringRoman when stringRoman.StartsWith("L") -> true 50
        | stringRoman when stringRoman.StartsWith("C") -> true 100
        | stringRoman when stringRoman.StartsWith("D") -> true 500
        | stringRoman when stringRoman.StartsWith("M") -> true 1000
        | _ -> false

    let rec discoverRoman romanString =
        let lengthOfUnitys = romanString.length;    
        if romanString.EndsWith("I")
            then 
                if lengthOfUnitys != 1
                    then 1 + discoverRoman(romanString - 1)
        else 1
        if romanString.EndsWith("V") 
            then 
                if romanString.EndsWith("IV")
                    then 
                        if lengthOfUnitys != 1
                            then 4 + discoverRoman(romanString - 1)
                        else 4
            else 
                if lengthOfUnitys != 1 
                    then 5 + discoverRoman(romanString - 1)
                else 5

    let convertUnity romanUnity = 
        match romanUnity with
        | UNIDADE romanUnity when romanUnity = "" -> 0
        | UNIDADE romanUnity when romanUnity = "I" -> 1
        | UNIDADE romanUnity when romanUnity = "II" -> 2
        | UNIDADE romanUnity when romanUnity = "III" -> 3
        | UNIDADE romanUnity when romanUnity = "IV" -> 4
        | UNIDADE romanUnity when romanUnity = "V" -> 5
        | UNIDADE romanUnity when romanUnity = "VI" -> 6
        | UNIDADE romanUnity when romanUnity = "VII" -> 7
        | UNIDADE romanUnity when romanUnity = "VIII" -> 8
        | UNIDADE romanUnity when romanUnity = "IX" -> 9
        | _ -> "Valor indefinido"


module ConverterNumberToRoman = 
    let convertThousands numberUnityOfThousands =
        match numberUnityOfThousands with
        | MILHAR numberUnityOfThousands when numberUnityOfThousands = 0 -> ""
        | MILHAR numberUnityOfThousands when numberUnityOfThousands = 1 -> "M"
        | MILHAR numberUnityOfThousands when numberUnityOfThousands = 2 -> "MM"
        | MILHAR numberUnityOfThousands when numberUnityOfThousands = 3 -> "MMM"
        | MILHAR numberUnityOfThousands when numberUnityOfThousands = 4 -> "IV"
        | _ -> "Valor indefinido"

    let convertHundred numberUnityOfHundred =
        match numberUnityOfHundred with
        | CENTENA numberUnityOfHundred when numberUnityOfHundred = 0 -> ""
        | CENTENA numberUnityOfHundred when numberUnityOfHundred = 1 -> "C"
        | CENTENA numberUnityOfHundred when numberUnityOfHundred = 2 -> "CC"
        | CENTENA numberUnityOfHundred when numberUnityOfHundred = 3 -> "CCC"
        | CENTENA numberUnityOfHundred when numberUnityOfHundred = 4 -> "CD"
        | CENTENA numberUnityOfHundred when numberUnityOfHundred = 5 -> "D"
        | CENTENA numberUnityOfHundred when numberUnityOfHundred = 6 -> "DC"
        | CENTENA numberUnityOfHundred when numberUnityOfHundred = 7 -> "DCC"
        | CENTENA numberUnityOfHundred when numberUnityOfHundred = 8 -> "DCCC"
        | CENTENA numberUnityOfHundred when numberUnityOfHundred = 9 -> "CM"
        | _ -> "Valor indefinido"
        
    let convertTen numberUnityOfTen =
        match numberUnityOfTen with
        | DEZENA numberUnityOfTen when numberUnityOfTen = 0 -> ""
        | DEZENA numberUnityOfTen when numberUnityOfTen = 1 -> "X"
        | DEZENA numberUnityOfTen when numberUnityOfTen = 2 -> "XX"
        | DEZENA numberUnityOfTen when numberUnityOfTen = 3 -> "XXX"
        | DEZENA numberUnityOfTen when numberUnityOfTen = 4 -> "XL"
        | DEZENA numberUnityOfTen when numberUnityOfTen = 5 -> "L"
        | DEZENA numberUnityOfTen when numberUnityOfTen = 6 -> "LX"
        | DEZENA numberUnityOfTen when numberUnityOfTen = 7 -> "LXX"
        | DEZENA numberUnityOfTen when numberUnityOfTen = 8 -> "LXXX"
        | DEZENA numberUnityOfTen when numberUnityOfTen = 9 -> "XC"
        | _ -> "Valor indefinido"


    let convertUnity numberUnity =
        match numberUnity with
        | UNIDADE numberUnity when numberUnity = 0 -> "X"
        | UNIDADE numberUnity when numberUnity = 1 -> "I"
        | UNIDADE numberUnity when numberUnity = 2 -> "II"
        | UNIDADE numberUnity when numberUnity = 3 -> "III"
        | UNIDADE numberUnity when numberUnity = 4 -> "IV"
        | UNIDADE numberUnity when numberUnity = 5 -> "V"
        | UNIDADE numberUnity when numberUnity = 6 -> "VI"
        | UNIDADE numberUnity when numberUnity = 7 -> "VII"
        | UNIDADE numberUnity when numberUnity = 8 -> "VIII"
        | UNIDADE numberUnity when numberUnity = 9 -> "IX"
        | _ -> "Valor indefinido"