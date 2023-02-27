export class Task2 {
    mayor(input: number[]): number {
        let max = 0;
        //console.log(`resultado ====> ${validation}`);
        for(let n of input){
            if(n>max){
                max=n;
            }
        }
        return max;
    }
}
