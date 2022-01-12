import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as Joi from "joi";
admin.initializeApp();

const registrationTemplate = Joi.object({
    isMentor: Joi.boolean().required(),
    isMentee: Joi.boolean().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    educationBackground: Joi.array().required(),
    careerInterest: Joi.array().required(),
    socialCauses: Joi.array().required()

})

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
export const register = functions.https.onRequest(async (req, res) => {
    const registrationData = req.body;
    try {
        await registrationTemplate.validateAsync(registrationData);
        const firestoreResult = await admin.firestore()
            .collection("registrations")
            .add(registrationData);
        res.status(200).json({message: `User Added With ID: ${firestoreResult.id}`});
    }
    catch (err) { 
        res.status(400).json(err);
    }
    
  });
  