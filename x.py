def validate_order(nums):
    waiting_stack = []
    curr_entered_ant = 0
    for elem in nums:

        while len(waiting_stack) > 0 and waiting_stack[-1] == curr_entered_ant+1:
            curr_entered_ant += 1
            waiting_stack.pop()

        if elem == curr_entered_ant+1:
            curr_entered_ant += 1
            continue

        waiting_stack.append(elem)

    while len(waiting_stack) > 0:
        if waiting_stack[-1] == curr_entered_ant+1:
            curr_entered_ant += 1
            waiting_stack.pop()
        else:
            break

    if len(waiting_stack) == 0:
        return 1
    return 0
