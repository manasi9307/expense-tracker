//@desc get all transactions
//@route GET/api/v1/transactions
//@access public    
exports.getTransactions = (req,res,next) => {
    res.send('Get Transaction');
}


//@desc add all transactions
//@route post/api/v1/transactions
//@access public    
exports.addTransactions = (req,res,next) => {
    res.send('Post Transaction');
}


//@desc delete transaction
//@route DELETE/api/v1/transactions/:id
//@access public    
exports.deleteTransaction = (req,res,next) => {
    res.send('Delete Transaction');
}