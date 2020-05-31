// JavaScript source code
$('#DetermineApproachButton').click(function () {
    var tally = parseInt($('#TallyLocation').val());

    if (tally === -1) {
        alert('You have no approach vector!');
        return;
    }

    var evade = rollEvadeDie();
    var attack = rollAttackDie();

    showEvade(evade);
    showAttack(attack);

    $('#MovementDescription').text('');
    $('#ActionDescription').text('');

    switch (tally) {
        case 0:

            switch (evade) {
                case 'Blank':
                    switch (attack) {
                        case 'Blank':
                            $('#MovementDescription').text('2-speed straight maneuver');
                            break;
                        case 'Focus':
                            $('#MovementDescription').text('Average straight maneuver');
                            break;
                        case 'Hit':
                            $('#MovementDescription').text('Fastest straight maneuver');
                            break;
                        case 'Crit':
                            $('#MovementDescription').text('Fastest advanced maneuver');
                            break;
                    }
                    break;
                case 'Focus':
                    switch (attack) {
                        case 'Blank':
                            $('#MovementDescription').text('Slowest blue straight maneuver');
                            break;
                        case 'Focus':
                            $('#MovementDescription').text('Slowest blue straight maneuver');
                            break;
                        case 'Hit':
                            $('#MovementDescription').text('Average blue straight maneuver');
                            break;
                        case 'Crit':
                            $('#MovementDescription').text('Fastest blue straight maneuver');
                            break;
                    }
                    break;
                case 'Evade':
                    switch (attack) {
                        case 'Blank':
                            $('#MovementDescription').text('Fastest turn maneuver toward the nearest obstacle');
                            break;
                        case 'Focus':
                            $('#MovementDescription').text('Slowest blue bank maneuver away from the nearest obstacle');
                            break;
                        case 'Hit':
                            $('#MovementDescription').text('Slowest straight, stationary or reverse maneuver away from the nearest obstacle');
                            break;
                        case 'Crit':
                            $('#MovementDescription').text('Slowest blue bank maneuver away from the nearest obstacle');
                            break;
                    }
                    break;
            }


            break;
        case 1:
            switch (evade) {
                case 'Blank':
                    switch (attack) {
                    case 'Blank':
                        $('#MovementDescription').text('2-speed straight maneuver');
                        break;
                    case 'Focus':
                        $('#MovementDescription').text('Slowest turn maneuver towards the Tally');
                        break;
                    case 'Hit':
                        $('#MovementDescription').text('Fastest turn maneuver towards the Tally');
                        break;
                    case 'Crit':
                        $('#MovementDescription').text('Fastest advanced maneuver away from the Tally');
                        break;
                    }
                    break;
                case 'Focus':
                    switch (attack) {
                    case 'Blank':
                        $('#MovementDescription').text('Slowest blue straight maneuver');
                        break;
                    case 'Focus':
                        $('#MovementDescription').text('Average blue straight maneuver');
                        break;
                    case 'Hit':
                        $('#MovementDescription').text('Slowest blue bank or turn maneuver towards the Tally');
                        break;
                    case 'Crit':
                        $('#MovementDescription').text('Fastest blue bank or turn towards the Tally');
                        break;
                    }
                    break;
                case 'Evade':
                    switch (attack) {
                    case 'Blank':
                        $('#MovementDescription').text('Fastest bank towards the nearest obstacle');
                        break;
                    case 'Focus':
                        $('#MovementDescription').text('Slowest bank away from the nearest obstacle');
                        break;
                    case 'Hit':
                        $('#MovementDescription').text('Slowest straight, stationary or reverse maneuver');
                        break;
                    case 'Crit':
                        $('#MovementDescription').text('Slowest blue bank maneuver away from the nearest obstacle');
                        break;
                    }
                    break;
            }
            break;
        case 2:
            switch (evade) {
                case 'Blank':
                    switch (attack) {
                    case 'Blank':
                        $('#MovementDescription').text('2-speed straight maneuver');
                        break;
                    case 'Focus':
                        $('#MovementDescription').text('Fastest turn maneuver towards the Tally');
                        break;
                    case 'Hit':
                        $('#MovementDescription').text('Slowest advanced maneuver away from the Tally');
                        break;
                    case 'Crit':
                        $('#MovementDescription').text('Fastest advanced maneuver towards the Tally');
                        break;
                    }
                    break;
                case 'Focus':
                    switch (attack) {
                    case 'Blank':
                        $('#MovementDescription').text('Slowest blue bank or turn maneuver towards the Tally');
                        break;
                    case 'Focus':
                        $('#MovementDescription').text('Slowest blue bank or turn maneuver towards the Tally');
                        break;
                    case 'Hit':
                        $('#MovementDescription').text('Average blue bank or turn maneuver towards the Tally');
                        break;
                    case 'Crit':
                        $('#MovementDescription').text('Fastest blue bank or turn towards the Tally');
                        break;
                    }
                    break;
                case 'Evade':
                    switch (attack) {
                    case 'Blank':
                        $('#MovementDescription').text('Fastest bank towards the Tally');
                        break;
                    case 'Focus':
                        $('#MovementDescription').text('Slowest turn towards the Tally');
                        break;
                    case 'Hit':
                        $('#MovementDescription').text('Slowest turn towards the Tally');
                        break;
                    case 'Crit':
                        $('#MovementDescription').text('Fastest advanced maneuver away from the nearest obstacle');
                        break;
                    }
                    break;
            }

            break;
        case 3:
            alert('Rear');
            break;
    }
});

function rollDie() {
    return Math.floor(Math.random() * 8);
};

function rollEvadeDie() {
    var die = rollDie();
    switch (die) {
        case 0:
        case 1:
        case 2:
            return 'Blank';
        case 3:
        case 4:
            return 'Focus';
        case 5:
        case 6:
        case 7:
            return 'Evade';
        default:
    }

}

function rollAttackDie() {
    var die = rollDie();
    switch (die) {
        case 0:
        case 1:
            return 'Blank';
        case 2:
        case 3:
            return 'Focus';
        case 4:
        case 5:
        case 6:
            return 'Hit';
        case 7:
            return 'Crit';
        default:
    }
}

function showEvade(evade) {
    $('#EvadeResult').removeClass();
    switch (evade) {
        case 'Blank':
            $('#EvadeResult').addClass('xwing-miniatures-font xwing-miniatures-font-condition-outline');
            break;
        case 'Focus':
            $('#EvadeResult').addClass('xwing-miniatures-font xwing-miniatures-font-focus');
            break;
        case 'Evade':
            $('#EvadeResult').addClass('xwing-miniatures-font xwing-miniatures-font-evade');
            break;

    }
};

function showAttack(attack) {
    $('#AttackResult').removeClass();
    switch (attack) {
        case 'Blank':
            $('#AttackResult').addClass('xwing-miniatures-font xwing-miniatures-font-condition-outline');
            break;
        case 'Focus':
            $('#AttackResult').addClass('xwing-miniatures-font xwing-miniatures-font-focus');
            break;
        case 'Hit':
            $('#AttackResult').addClass('xwing-miniatures-font xwing-miniatures-font-hit');
            break;
        case 'Crit':
            $('#AttackResult').addClass('xwing-miniatures-font xwing-miniatures-font-crit');
            break;
    }
};