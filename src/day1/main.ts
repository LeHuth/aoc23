import { open } from 'node:fs/promises';



const loadFile = async (path: string): Promise<string> => {
    const response = await open(path, 'r');
    return response.readFile('utf-8');
}

const convertToArr = (input: string): string[] => {
    return input.split('\r\n')
}

const extractNum = (input: string[]): string[][] => {
    const re: RegExp = new RegExp('\\d', 'g')
    return input.map((item: string) => {
        const matchArr :RegExpMatchArray | null= re[Symbol.match](item)
        if(matchArr){
            return matchArr as string[]
        }
        return []
    })
}

const extractNumFromStr = (input: string[]): number[][] => {
    const re: RegExp = new RegExp('one|two|three|four|five|six|seve|eight|nine', 'gm')
    return input.map((item: string) => {
        const matchArr :RegExpMatchArray | null= re[Symbol.match](item)
        if(matchArr){
            return matchArr.map((item: string) => {
                switch (item){
                    case 'one':
                        return 1
                    case 'two':
                        return 2
                    case 'three':
                        return 3
                    case 'four':
                        return 4
                    case 'five':
                        return 5
                    case 'six':
                        return 6
                    case 'seven':
                        return 7
                    case 'eight':
                        return 8
                    case 'nine':
                        return 9
                    default:
                        return 0
                }
            })
        }
        return []
    })
}

const convertToNum = (input: string[][]): number[][] => {
    return input.map((item: string[]) => {
        return item.map((item: string) => {
            return parseInt(item)
        })
    })
}

const sumItUp = (input: number[][]): number => {
    return input.map((item:number[]) => {
        // @ts-ignore
        return parseInt(item[0] + item.slice(-1))
    }).reduce((acc:number, curr:number) => {
        return acc + curr
    })
}

export const day1 = async () => {
    const result: string = await loadFile('src/day1/data.txt')
    const rowArr: string[] = convertToArr(result)
    const lol = extractNumFromStr(rowArr)
    console.log(lol)
/*    const test = extractNum(rowArr)
    const test2 = convertToNum(test)
    const test3 = sumItUp(test2)
    console.log(test3)*/
}

