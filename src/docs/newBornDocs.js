/**
 * @swagger
 * /DataCollection/API/newBorns/add:
 *   post:
 *     summary: Add a new born record.
 *     tags:
 *       - NewBorn
 *     security:
 *       - BearerAuth: []
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: motherName
 *         type: string
 *         required: true
 *       - in: formData
 *         name: fatherName
 *         type: string
 *         required: true
 *       - in: formData
 *         name: maritalStatus
 *         type: string
 *         required: true
 *       - in: formData
 *         name: phoneContact
 *         type: string
 *         required: true
 *       - in: formData
 *         name: province
 *         type: string
 *         required: true
 *       - in: formData
 *         name: district
 *         type: string
 *         required: true
 *       - in: formData
 *         name: dateOfBirth
 *         type: string
 *         format: date
 *         required: true
 *       - in: formData
 *         name: ageOfNewborn
 *         type: integer
 *         required: true
 *       - in: formData
 *         name: sex
 *         type: file
 *         required: true
 *       - in: formData
 *         name: modeOfDelivery
 *         type: string
 *         required: true
 *       - in: formData
 *         name: APGARSCOREAtBirth
 *         type: integer
 *         required: true
 *       - in: formData
 *         name: weightAtBirth
 *         type: integer
 *         required: true
 *       - in: formData
 *         name: neonatalInfectionRisk
 *         type: string
 *         required: true
 *       - in: formData
 *         name: maternalSevereDisease
 *         type: string
 *         required: true
 *       - in: formData
 *         name: historyOfMaternalAlcoholUseAndSmoking
 *         type: string
 *         required: true
 *       - in: formData
 *         name: maternalExplosureToOtotoxicDrugs
 *         type: string
 *         required: true
 *       - in: formData
 *         name: newbornPositionInTheFamily
 *         type: string
 *         required: true
 *       - in: formData
 *         name: presenceOfEarDysmorphism
 *         type: string
 *         required: true
 *       - in: formData
 *         name: historyOfHearingLossAmongFamilyMembers
 *         type: string
 *         required: true
 *       - in: formData
 *         name: ABRScale
 *         type: string
 *         required: true
 *     responses:
 *       '200':
 *         description: New born added successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: '200'
 *               message: 'New born added'
 *               data:
 *                 id: 1
 *                 motherName: 'Sample Mother'
 *                 fatherName: 'Sample Father'
 *                 maritalStatus: 'Married'
 *                 phoneContact: '1234567890'
 *                 province: 'Sample Province'
 *                 district: 'Sample District'
 *                 dateOfBirth: '2023-12-24'
 *                 ageOfNewborn: 1
 *                 sex: 'path/to/sex/file'
 *                 modeOfDelivery: 'Normal'
 *                 APGARSCOREAtBirth: 9
 *                 weightAtBirth: 3
 *                 neonatalInfectionRisk: 'Low'
 *                 maternalSevereDisease: 'No'
 *                 historyOfMaternalAlcoholUseAndSmoking: 'No'
 *                 maternalExplosureToOtotoxicDrugs: 'No'
 *                 newbornPositionInTheFamily: 'First'
 *                 presenceOfEarDysmorphism: 'No'
 *                 historyOfHearingLossAmongFamilyMembers: 'No'
 *                 ABRScale: 'Normal'
 *                 generatedCode: '12345-2023-12-24-1'
 *                 createdAt: '2023-12-24T17:29:49.464Z'
 *                 updatedAt: '2023-12-24T17:29:49.464Z'
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: '500'
 *               message: 'Failed to register'
 *               error: 'Error message details'
 */

/**
 * @swagger
 * /DataCollection/API/newBorns/update/{id}:
 *   put:
 *     summary: Update information for a specific new born.
 *     tags:
 *       - NewBorn
 *     security:
 *       - BearerAuth: []
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         required: true
 *         description: ID of the new born to be updated.
 *       - in: formData
 *         name: motherName
 *         type: string
 *       - in: formData
 *         name: fatherName
 *         type: string
 *       - in: formData
 *         name: maritalStatus
 *         type: string
 *       - in: formData
 *         name: phoneContact
 *         type: string
 *       - in: formData
 *         name: province
 *         type: string
 *       - in: formData
 *         name: district
 *         type: string
 *       - in: formData
 *         name: dateOfBirth
 *         type: string
 *         format: date
 *       - in: formData
 *         name: ageOfNewborn
 *         type: integer
 *       - in: formData
 *         name: sex
 *         type: file
 *       - in: formData
 *         name: modeOfDelivery
 *         type: string
 *       - in: formData
 *         name: APGARSCOREAtBirth
 *         type: integer
 *       - in: formData
 *         name: weightAtBirth
 *         type: integer
 *       - in: formData
 *         name: neonatalInfectionRisk
 *         type: string
 *       - in: formData
 *         name: maternalSevereDisease
 *         type: string
 *       - in: formData
 *         name: historyOfMaternalAlcoholUseAndSmoking
 *         type: string
 *       - in: formData
 *         name: maternalExplosureToOtotoxicDrugs
 *         type: string
 *       - in: formData
 *         name: newbornPositionInTheFamily
 *         type: string
 *       - in: formData
 *         name: presenceOfEarDysmorphism
 *         type: string
 *       - in: formData
 *         name: historyOfHearingLossAmongFamilyMembers
 *         type: string
 *       - in: formData
 *         name: ABRScale
 *         type: string
 *     responses:
 *       '200':
 *         description: New born updated successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: '200'
 *               message: 'New born updated'
 *       '403':
 *         description: Update not allowed after 24 hours.
 *         content:
 *           application/json:
 *             example:
 *               status: '403'
 *               message: 'Update not allowed after 24 hours'
 *       '404':
 *         description: New born not found.
 *         content:
 *           application/json:
 *             example:
 *               status: '404'
 *               message: 'New born not found'
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: '500'
 *               message: 'Failed to update new born'
 *               error: 'Error message details'
 */

/**
 * @swagger
 * /DataCollection/API/newBorns/getSingle/{id}:
 *   get:
 *     summary: Get information for a specific new born.
 *     tags:
 *       - NewBorn
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         required: true
 *         description: ID of the new born to be retrieved.
 *     responses:
 *       '200':
 *         description: New born retrieved successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: '200'
 *               message: 'A new born retrieved successfully'
 *               data:
 *                 id: 1
 *                 motherName: 'Mother'
 *                 fatherName: 'Father'
 *                 maritalStatus: 'Married'
 *                 phoneContact: '1234567890'
 *                 province: 'Province'
 *                 district: 'District'
 *                 dateOfBirth: '2023-01-01'
 *                 ageOfNewborn: 1
 *                 sex: 'male'
 *                 modeOfDelivery: 'Normal'
 *                 APGARSCOREAtBirth: 9
 *                 weightAtBirth: 3.5
 *                 neonatalInfectionRisk: 'Low'
 *                 maternalSevereDisease: 'No'
 *                 historyOfMaternalAlcoholUseAndSmoking: 'No'
 *                 maternalExplosureToOtotoxicDrugs: 'No'
 *                 newbornPositionInTheFamily: 'First'
 *                 presenceOfEarDysmorphism: 'No'
 *                 historyOfHearingLossAmongFamilyMembers: 'No'
 *                 ABRScale: 'Normal'
 *       '404':
 *         description: New born not found.
 *         content:
 *           application/json:
 *             example:
 *               status: '404'
 *               message: 'New born not found'
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: '500'
 *               message: 'Failed to retrieve a new born'
 *               error: 'Error message details'
 */

/**
 * @swagger
 * /DataCollection/API/newBorns/getAll:
 *   get:
 *     summary: Get a list of all new borns.
 *     tags:
 *       - NewBorn
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '201':
 *         description: New borns retrieved successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: '201'
 *               message: 'New borns retrieved successfully'
 *               data:
 *                 - id: 1
 *                   motherName: 'Mother1'
 *                   fatherName: 'Father1'
 *                   maritalStatus: 'Married'
 *                   phoneContact: '1234567890'
 *                   province: 'Province1'
 *                   district: 'District1'
 *                   dateOfBirth: '2023-01-01'
 *                   ageOfNewborn: 1
 *                   sex: 'male'
 *                   modeOfDelivery: 'Normal'
 *                   APGARSCOREAtBirth: 9
 *                   weightAtBirth: 3.5
 *                   neonatalInfectionRisk: 'Low'
 *                   maternalSevereDisease: 'No'
 *                   historyOfMaternalAlcoholUseAndSmoking: 'No'
 *                   maternalExplosureToOtotoxicDrugs: 'No'
 *                   newbornPositionInTheFamily: 'First'
 *                   presenceOfEarDysmorphism: 'No'
 *                   historyOfHearingLossAmongFamilyMembers: 'No'
 *                   ABRScale: 'Normal'
 *                 - id: 2
 *                   motherName: 'Mother2'
 *                   fatherName: 'Father2'
 *                   maritalStatus: 'Single'
 *                   phoneContact: '9876543210'
 *                   province: 'Province2'
 *                   district: 'District2'
 *                   dateOfBirth: '2023-01-02'
 *                   ageOfNewborn: 2
 *                   sex: 'female'
 *                   modeOfDelivery: 'C-Section'
 *                   APGARSCOREAtBirth: 8
 *                   weightAtBirth: 3.2
 *                   neonatalInfectionRisk: 'Moderate'
 *                   maternalSevereDisease: 'Yes'
 *                   historyOfMaternalAlcoholUseAndSmoking: 'Yes'
 *                   maternalExplosureToOtotoxicDrugs: 'Yes'
 *                   newbornPositionInTheFamily: 'Second'
 *                   presenceOfEarDysmorphism: 'Yes'
 *                   historyOfHearingLossAmongFamilyMembers: 'Yes'
 *                   ABRScale: 'Abnormal'
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: '500'
 *               message: 'Failed to retrieve data'
 *               error: 'Error message details'
 */
