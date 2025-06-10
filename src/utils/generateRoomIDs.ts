function generateRoomIDS() {
    const id = Date.now().toString(36) + Math.random().toString().substring(2)
    return id
}

export default generateRoomIDS