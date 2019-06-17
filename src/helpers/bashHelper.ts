import * as child_process from 'child_process';

class BashHelper{
    public execBash(path: string): Promise<void>{
        return new Promise((resolve, reject) => {
            child_process.exec(`sh ${path}`,
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    reject(error);
                }
                resolve();
            });
        });
        
    }
}

export default new BashHelper();
