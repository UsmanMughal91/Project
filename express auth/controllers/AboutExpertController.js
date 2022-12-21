

import AboutExpertModel from '../models/AboutExpert.js'

class AboutExpertController {
   static aboutMe = async (req, res) => {
      const { aboutMe, days, hours, pic } = req.body
      console.log(req.body)

      
      if (aboutMe&& days&& hours&& pic) {
     
               try {
                 
                  const doc = new AboutExpertModel({
                     aboutMe: aboutMe,
                     days:days,
                     hours: hours,
                     pic: pic,
                  })
                  await doc.save()
                  res.send({ "status": "success", "message": "Edit profile successfully" })
               } catch (error) {
                  console.log(error)
                  res.send({ "status": "failed", "message": "Failed to edit profile" })
               }
           
         } else {
            res.send({ "status": "failed", "message": "All fields are required" })
         }

      }
   }


export default AboutExpertController