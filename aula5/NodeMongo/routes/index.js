var express = require("express");
var router = express.Router();
var axios = require('axios');
let SensorSchema = require ('../controller/sensor')
let CaretakerSchema = require('../controller/caretaker')
let PatientSchema = require('../controller/patient')
let ClinicalInfoSchema = require('../controller/clinicalinfo')
let ServiceSchema = require('../controller/service')

router.get("/", (req, res) => {
  res.json({
    rota: "index"
  })
})

router.get("/acedehpeixoto/:id", (req, res) => {
  axios.get(
      'http://nosql.hpeixoto.me/api/sensor/' + req.params.id
  )
  .then(async response => {
      const {sensorid, sensornum, type_of_sensor} = response.data;
      let newSensorResponse = await SensorSchema.newSensor(sensorid, sensornum, type_of_sensor)
      if (newSensorResponse.success){
          res.status(200).json({info:"Novo sensor adicionado com sucesso"})
      } else {
          res.status(200).json({info:"Erro ao adicionar novo sensor"})
      }
      res.json(response.data);
  })
  .catch(err => {
      console.log(err)
      res.json(err);
  })
})

const {patientid, patientname, patientage} = response.data;
      let newPatientResponse = await PatientSchema.newPatient(patientid, patientname, patientage)
      if (newPatientResponse.success){
          res.status(200).json({info:"Novo paciente adicionado com sucesso"})
      } else {
          res.status(200).json({info:"Erro ao adicionar novo paciente"})
      }
      res.json(response.data);
      
const {serviceCod, serviceDesc} = response.data;
      let newServiceResponse = await ServiceSchema.newService(serviceCod, serviceDesc)
      if (newServiceResponse.success){
          res.status(200).json({info:"Novo servico adicionado com sucesso"})
      } else {
          res.status(200).json({info:"Erro ao adicionar novo serviço"})
      }
      res.json(response.data);

const {caretakerid, caretakername} = response.data;
      let newCaretakerResponse = await CaretakerSchema.newCaretaker(caretakerid, caretakername)
      if (newCaretakerResponse.success){
          res.status(200).json({info:"Novo caretaker adicionado com sucesso"})
      } else {
          res.status(200).json({info:"Erro ao adicionar novo caretaker"})
      }
      res.json(response.data);

const {clinicalInfoID, admDate, bed, bodyTemp,bpm, sato2, bloodPress} = response.data;
      let newClinicalInfoResponse = await ClinicalInfoSchema.newClinicalInfo(clinicalInfoID, admDate, bed, bodyTemp,bpm, sato2, bloodPress.systolic, bloodPress.diastolic)
      if (newClinicalInfoResponse.success){
          res.status(200).json({info:"Novos Dados Clincos adicionados com sucesso"})
      } else {
          res.status(200).json({info:"Erro ao adicionar novos dados clinicos"})
      }
      res.json(response.data);

module.exports = router;