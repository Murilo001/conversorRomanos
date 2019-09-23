// Learn more about F# at http://fsharp.org

open System

let convertNumber numero = printfn "Converti %s pra string" numero

[<EntryPoint>]
let main argv =
    convertNumber "Argument Number"
    //printfn "Hello World from F#!"
    0 // return an integer exit code
