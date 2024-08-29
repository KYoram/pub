
export async function AwaitCatch<T>(input: Promise<T>): Promise<[null, Error]>
export async function AwaitCatch<T>(input: Promise<T>): Promise<[T, null]>
export async function AwaitCatch<T>(input: Promise<T>): Promise<[null, Error] | [T, null]> {
    try {
        const data = await input;
        return [data, null];
    } catch (error) {
        let parsed = new Error("unknown error occurred");

        if (error){
            parsed = new Error(String(error));

            if (error instanceof Error){
                parsed = error;
            }
        }
        
        return [null, parsed];
    }
}