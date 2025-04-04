const express = require("express");
const allDBusers = require("../models/user")
const router = express.Router();

// Routes
// app.get("/", async(req, res) => {
//     const allDBusers = await User.find({});
//     const html = `
//     <ul>
//         ${allDBusers.map(user => `<li>${user.first_name} - ${user.email}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
// })

// REST API  
router.get("/",async (req, res) => {
    allDBusers = await User.find({});
    // res.setHeader("X-MyName", "Tanishq Singh"); // Custom header
    // // Always add X to custom headers
    return res.json(allDBusers);
})

// :id - dynamic path parameters
// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id);
//     return res.json(user);
// })

router.post("/",async (req, res) => {
    // TODO: create new user
    const body = req.body;
    // console.log("body ", body);
    if (!body || !body.first_name || !body.last_name || !body.email || !body.job_title) {
        return res.status(400).json({ msg: "All fields are required!" })
    }
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        job_title: body.job_title,
    });

    console.log("result ", result);

    res.status(200).json({ msg: "Success!"});
    // users.push({ ...body, id: users.length + 1 });
    // // fs.writeFile function only writes strings or buffers to a file.
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //     return res.json({ status: "success", id: users.length });
    // })
})

// app.patch("/api/users/:id", (req, res) => {
//     // TODO: edit the user with ID
//     res.json({status: "pending"});
// })

// app.delete("/api/users/:id", (req, res) => {
//     // TODO: delete the user with ID
//     res.json({status: "pending"});
// })

router.route("/:id").get(async (req, res) => {
    // const id = Number(req.params.id);
    // const user = users.find(user => user.id === id);
    const allDBusers = await User.findById(req.params.id);
    if (!allDBusers) return res.status(404).json({ error: "User not found!" })
    return res.json(allDBusers);
}).patch((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);

    // Check if user exists
    if (userIndex === -1) {
        return res.status(404).json({ status: "error", message: "User not found" });
    }

    // Update user fields dynamically
    const updatedUser = { ...users[userIndex], ...req.body };
    users[userIndex] = updatedUser;

    // Write updated data to file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ status: "error", message: "Failed to update user" });
        }
        res.json({ status: "success", user: updatedUser });
    });
}).delete((req, res) => {
    // TODO: delete the user with ID
    const id = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ status: "error", message: "User not found" });
    }

    users = users.filter(user => user.id !== id);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ status: "error", message: "Failed to update user" });
        }
        res.json({ status: "success" });
    });
})

module.exports = router;