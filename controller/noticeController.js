const notice = require("../models/notice");
const Notices = require("../models/notice");
exports.noticecreate =  (req,res) => {
        let body = req.body;
        console.log(body)
        let notices = new Notices(body);
        notices.save().then((notices) => {
        res.send({     
        // category,
        notice: 'successfully created the notices'
        })
        }).catch((err) => {
        res.send(err);
        });
        };

exports.getallnotices= (req, res) => {
    Notices.find().then(data=>{
        res.json(data);
        }).catch(err=> {
        res.json({
        message:"Something went to wrong!" +err
        });
        })
  }


exports.getnotice=(req,res) =>{
    Notices.findById(req.params.id,(err,notice)=>{
        if(err){
            return res.status(500).json({message:err})
        }
        else if(!notice){
            return res.status(404).json({message:"notice not found"})
         }
         else{
             return res.status(200).json({notice})
         }

    })
}

  exports.updatenotice= (req, res) => {
    Notices.findByIdAndUpdate(req.params.id,{txt:req.body.txt},(err,notice)=>{
        if(err){
            return res.status(500).json({message:err})
        }
        else if(!notice){
           return res.status(404).json({message:"notice not found"})
        }
        else{
            notice.save((err,savedNotice)=>{
                if(err){
                    return res.status(400).json({message:err})
                }
                else{
                    return res.status(200).json({message:"notice update successfully"})
                }
            })
        }

    })
  }

  exports.deletenotice=(req,res)=>{
      Notices.findByIdAndDelete(req.params.id,(err,notice)=>{
          if(err){
            return res.status(500).json({message:err})
          }else if(!notice){
            return res.status(404).json({message:"notice not found"})
          }
          else{
            return res.status(200).json({message:"notice deleted successfully"})
          }
      })
  }