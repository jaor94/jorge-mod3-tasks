export class Task1 {
    esPalindromo(input: string): boolean {
        let res:boolean = false;
        let strLength = input.length;
        let str1:string ='';
        let str2:string ='';
        for(let i = 0; i < strLength; i++){
            if(input.charAt(i)!=' '){
                str1+=input.charAt(i);
                //console.log('1.-<'+(input.charAt(i))+'>.index=<'+i+'>='+str1);
            }
            if(input.charAt((strLength-1) - i)!=' '){
                str2+=input.charAt((strLength-1) - i);
                //console.log('2.-<'+(input.charAt(strLength - i))+'>.index=<'+(strLength - i)+'>='+str2);
            }
        }
        //const validation = input % 2 == 0;
        //console.log(`resultado ====> ${validation}`);
        console.log(str1 + '-' + str2);
        //return validation;
        return (str1==str2);
    }
    
    
}
