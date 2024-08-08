const postTest = (req, res) => {
    console.log({ body: req.body });

    res.json({ message: "POST -Estamos en post desde test.controllers!" });
}

const getTest = (req, res) => {
    console.log({ body: req.body });
    res.json({ message: "GET -Estamos en get desde test.controllers!" });
}

const deleteTest = (req, res) => {
    console.log({ body: req.body });
    res.json({ message: "DELETE -Estamos en delete desde test.controllers!" });
}

const putTest = (req, res) => {
    console.log({ body: req.body });
    res.json({ message: "PUT -Estamos en put desde test.controllers!" });
}

export { postTest, getTest, deleteTest, putTest };