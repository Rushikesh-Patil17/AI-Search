var masterArray = [{
        "x": 536.15625,
        "y": 92.75,
        "h": 20,
        "name": "START",
        "isStart": true,
        "isStop": false,
        "nodes": null
    },
    {
        "x": 532.15625,
        "y": 191.75,
        "name": "A",
        "isStart": false,
        "isStop": false,
        "h": 10,
        "nodes": [{
            "destinationName": "START",
            "destinationX": 536.15625,
            "destinationY": 92.75,
            "h": 20,
            "weight": "1"
        }]
    },
    {
        "x": 537.15625,
        "y": 296.75,
        "name": "B",
        "isStart": false,
        "isStop": false,
        "h": 40,
        "nodes": [{
            "destinationName": "A",
            "destinationX": 532.15625,
            "destinationY": 191.75,
            "h": 10,
            "weight": "1"
        }]
    },
    {
        "x": 696.15625,
        "y": 188.75,
        "name": "C",
        "isStart": false,
        "isStop": false,
        "h": 20,
        "nodes": [{
            "destinationName": "A",
            "destinationX": 532.15625,
            "destinationY": 191.75,
            "h": 10,
            "weight": "2"
        }]
    },
    {
        "x": 687.15625,
        "y": 309.75,
        "name": "D",
        "isStart": false,
        "isStop": false,
        "h": 25,
        "nodes": [{
            "destinationName": "C",
            "destinationX": 696.15625,
            "destinationY": 188.75,
            "h": 20,
            "weight": "2"
        }]
    },
    {
        "x": 880.15625,
        "y": 188.75,
        "name": "E",
        "isStart": false,
        "isStop": false,
        "h": 22,
        "nodes": [{
            "destinationName": "C",
            "destinationX": 696.15625,
            "destinationY": 188.75,
            "h": 20,
            "weight": "1"
        }]
    },
    {
        "x": 878.15625,
        "y": 320.75,
        "name": "F",
        "isStart": false,
        "isStop": false,
        "h": 40,
        "nodes": [{
                "destinationName": "D",
                "destinationX": 687.15625,
                "destinationY": 309.75,
                "h": 25,
                "weight": "1"
            },
            {
                "destinationName": "E",
                "destinationX": 880.15625,
                "destinationY": 188.75,
                "h": 22,
                "weight": "1"
            }
        ]
    },
    {
        "x": 537.15625,
        "y": 512.75,
        "name": "DESTINATION",
        "isStart": false,
        "isStop": true,
        "h": 0,
        "nodes": [{
                "destinationName": "B",
                "destinationX": 537.15625,
                "destinationY": 296.75,
                "h": 40,
                "weight": "6"
            },
            {
                "destinationName": "D",
                "destinationX": 687.15625,
                "destinationY": 309.75,
                "h": 25,
                "weight": "1"
            }
        ]
    }
];


// The graph
const adjacencyList = new Map();

// Add a new node
function addNode(nodeList) {
    adjacencyList.set(nodeList, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
}

function makeMap() {
    for (var i = 0; i < masterArray.length; i++) {
        addNode(masterArray[i].name);
    }

    for (var i = 0; i < masterArray.length; i++) {
        if (masterArray[i].nodes != null) {
            for (var j = 0; j < masterArray[i].nodes.length; j++) {

                addEdge(masterArray[i].name, {
                    name: masterArray[i].nodes[j].destinationName,
                    x: masterArray[i].nodes[j].destinationX,
                    y: masterArray[i].nodes[j].destinationY,
                    cost: masterArray[i].nodes[j].weight,
                    h: masterArray[i].nodes[j].h,
                });

                addEdge(masterArray[i].nodes[j].destinationName, {
                    name: masterArray[i].name,
                    x: masterArray[i].x,
                    y: masterArray[i].y,
                    cost: masterArray[i].nodes[j].weight,
                    h: masterArray[i].h
                });
            }
        }
    }
}

makeMap();
module.exports = adjacencyList;