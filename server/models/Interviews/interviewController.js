const Interview = require('./path/to/interviewSchema.js'); // Update the path to your Interview schema
const JobRequest = require('./path/to/jobRequestSchema.js'); // Update the path to your JobRequest schema

// Create an Interview
const createInterview = async (req, res) => {
    try {
        const { status, jobRequestId, date, loc, city, state } = req.body;

        // Check if the Job Request exists
        const jobRequest = await JobRequest.findById(jobRequestId);
      

        const interview = new Interview({
            workerId:req.params.id,
            status,
            jobRequestId,
            empId:jobRequest.empId,
            date,
            loc,
            city,
            state
        });

        const data = await interview.save();
        res.json({
            status: 200,
            msg: 'Interview Created Successfully',
            data: data,
        });
    } catch (err) {
        res.json({
            status: 500,
            err: err
        });
    }
};

// View Interviews by Worker ID
const viewInterviewsByWorkerId = (req, res) => {
    Interview.find({ workerId: req.params.id })
        .populate("workerId")
        .populate("jobRequestId")
        .populate("empId")
        .exec()
        .then((data) => {
            res.json({
                status: 200,
                msg: "Interviews Obtained Successfully",
                data: data,
            });
        })
        .catch((err) => {
            res.json({
                status: 500,
                err: err
            });
        });
};

// View Interviews by Employer ID
const viewInterviewsByEmpId = (req, res) => {
    Interview.find({ empId: req.params.id })
        .populate("workerId")
        .populate("jobRequestId")
        .populate("empId")
        .exec()
        .then((data) => {
            res.json({
                status: 200,
                msg: "Interviews Obtained Successfully",
                data: data,
            });
        })
        .catch((err) => {
            res.json({
                status: 500,
                err: err
            });
        });
};

// View Interview by Job Request ID
const viewInterviewByJobRequestId = (req, res) => {
    Interview.find({ jobRequestId: req.params.id })
        .populate("workerId")
        .populate("jobRequestId")
        .populate("empId")
        .exec()
        .then((data) => {
            res.json({
                status: 200,
                msg: "Interview Obtained Successfully",
                data: data,
            });
        })
        .catch((err) => {
            res.json({
                status: 500,
                err: err
            });
        });
};

module.exports = {
    createInterview,
    viewInterviewsByWorkerId,
    viewInterviewsByEmpId,
    viewInterviewByJobRequestId
};
