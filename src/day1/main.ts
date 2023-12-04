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
    const test = extractNum(rowArr)
    const test2 = convertToNum(test)
    const test3 = sumItUp(test2)
    console.log(test3)
}

