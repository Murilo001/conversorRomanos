namespace Menus

module MainMenu =

    type Options =  
        | NUMBER_TO_ROMAN of int
        | ROMAN_TO_NUMBER of int
        | EXIT of int

    let selectOption option =
        match option with
        | NUMBER_TO_ROMAN option when option = 1 -> showNumberToRomanMenu ()
        | ROMAN_TO_NUMBER option when option = 2 -> showRomanToNumberMenu ()
        | EXIT option when option = 3 -> 0

    let showStartMenu() =
            Console.Write("| Welcome to Roman Converter. What operation you want to do?\n")
            Console.Write("| \n")
            Console.Write("| 1. Number to Roman \n")
            Console.Write("| 2. Roman to Number \n")
            Console.Write("| 3. Exit \n")
            Console.Write("| \n")
            let option = Console.ReadLine()
            selectOption option

    let showNumberToRomanMenu () =
        Console.Write("| Which number you want to convert? \n")
        Console.ReadLine()

    //let showRomanToNumberMenu =