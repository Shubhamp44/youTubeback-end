import mongoose,{Schema} from "mongoose";


const likeSchema =new Schema({
    video :{
        type:Schema.type.objectId,
        ref : "video"
    },

     Comment :{
        type:Schema.type.objectId,
        ref : "comment"
    },
     tweet :{
        type:Schema.type.objectId,
        ref : "tweet"
    },
     likeBy :{
        type:Schema.type.objectId,
        ref : "User"
    },



}
,
{timestamps:true}
)

export const Like =mongoose.model("Like",likeSchema)