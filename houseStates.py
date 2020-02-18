# given: states list [1,0,0,0,1,0,1], numdays int
# house states change to inactive if neighbors are both active or both inactive
# otherwise house states change to active
# return integer list for final state of cells
def cellCompete(states, days):
    currState = states
    while days > 0:
        currState = calcNextDay(currState)
        days -= 1
            
    return currState

def calcNextDay(states):
    resultStates = []
    for i in range(8):
        if i == 0:
            resultStates.append(calcState(0, states[1]))
        elif i == 7:
            resultStates.append(calcState(states[6], 0))
        else:
            resultStates.append(calcState(states[i-1], states[i+1]))
    return resultStates
            
def calcState(neighbor1, neighbor2):
    return 0 if neighbor1 == neighbor2 else 1