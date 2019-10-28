//  分页中的单项
export class MessageItem
{
    constructor(
        public id: number,
        public author: string, 
        public content: string
    ) {}
}

//  新信息
export class NewMessage_Model {
    //  默认作者名字
    static readonly DEFAULT_AUTHOR: string = "匿名";
    //  检查有效
    static readonly VALID: string = "";

    constructor(
        public author: string,
        public content: string
    ) { }

    /**
     *  检查参数是否有效
     */
    invalid(): string {
        if (!this.author) {
            this.author = NewMessage_Model.DEFAULT_AUTHOR;
        }
        if (!this.content) {
            return "";
        }
        
        return NewMessage_Model.VALID;
    }
}