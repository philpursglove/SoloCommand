// JavaScript source code
$('#DetermineApproachButton').click(function () {
    var tally = parseInt($('#TallyLocation').val());

    if (tally === -1) {
        alert('You have no approach vector!');
        return;
    }

    $('#MovementDescription').text('');
    $('#ActionDescription').text('');

    var evade = rollEvadeDie();
    var attack = rollAttackDie();

    showEvade(evade);
    showAttack(attack);
    showAttitude(evade);
    showAction(evade);


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
            switch (evade) {
                case 'Blank':
                    switch (attack) {
                        case 'Blank':
                            $('#MovementDescription').text('2-speed straight maneuver');
                            break;
                        case 'Focus':
                            $('#MovementDescription').text('Fastest advanced maneuver towards the Tally');
                            break;
                        case 'Hit':
                            $('#MovementDescription').text('Fastest advanced maneuver towards the Tally');
                            break;
                        case 'Crit':
                            $('#MovementDescription').text('Slowest advanced maneuver towards the Tally');
                            break;
                    }
                    break;
                case 'Focus':
                    switch (attack) {
                        case 'Blank':
                            $('#MovementDescription').text('Fastest blue bank or turn maneuver towards the Tally');
                            break;
                        case 'Focus':
                            $('#MovementDescription').text('Fastest blue bank or turn maneuver away from the Tally');
                            break;
                        case 'Hit':
                            $('#MovementDescription').text('Slowest blue bank or turn maneuver towards the Tally');
                            break;
                        case 'Crit':
                            $('#MovementDescription').text('Slowest blue bank or turn away from the Tally');
                            break;
                    }
                    break;
                case 'Evade':
                    switch (attack) {
                        case 'Blank':
                            $('#MovementDescription').text('Fastest straight');
                            break;
                        case 'Focus':
                            $('#MovementDescription').text('Fastest turn away from the nearest obstacle');
                            break;
                        case 'Hit':
                            $('#MovementDescription').text('Fastest turn towards the nearest obstacle');
                            break;
                        case 'Crit':
                            $('#MovementDescription').text('Slowest turn towards the nearest obstacle');
                            break;
                    }
                    break;
            }
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

function showAttitude(evade) {
    switch (evade) {
        case 'Blank':
            $('#AttitudeDescription').text('Offensive');
            break;
        case 'Focus':
            $('#AttitudeDescription').text('Balanced');
            break;
        case 'Evade':
            $('#AttitudeDescription').text('Defensive');
            break;
    }
}

function showAction(evade) {
    $('#ActionDescription').html('');
    switch (evade) {
    case 'Blank':
        $('#ActionDescription').html('<ol><li>If no enemy ship is in any of the solo ships firing arcs, it performs a Barrel Roll, Boost or Rotate Turret actio that will cause at least one enemy ship to be in any of its firing arcs</li><li>If the solo ship is equipped with a special weapon with the Target Lock header, it performs the Target Lock action choosing the nearest enemy ship in the firing arc and range of that special weapon</li><li>The solo ship performs the Target Lock action, choosing the nearest enemy ship in its firing arc. If no enemy ship is in the firing arc, it chooses the nearest enemy ship</li><li>If no enemy ship is in the solo ships firing arc and any of its Torpedo, Missile or Device upgrades have one or more inactive charges, it performs the Reload action</li><li>If the solo ship has no Focus token, it performs the Focus action</li><li>If the solo ship does not have a Calculate token, it performs the Calculate action</li></ol>');
        break;
    case 'Focus':
        $('#ActionDescription').html('<ol><li>The solo ship performs a Coordinate action, choosing the nearest friendly ship without Cooridnate in its action bar that can perform an action</li><li>If there is an obstacle in the solo ships bullseye arc at range 0-2, it performs a barrel or boost action away from the obstacle</li><li>If the solo ship does not have a Focus token it performs the Focus action</li><li>If the solo ship does not have a Calculate token it performs the Calculate action</li></ol>');

        break;
    case 'Evade':
        $('#ActionDescription').html(
            '<ol><li>If the solo ship is in at least 1 enemy ships firing arc, it performs a barrel roll, boost or SLAM action that will move it out of at least 1 enemy ships firing arc.</li><li>The solo ship performs the Reinforce action, reinforcing the full arc that the most enemy ships are in</li><li>The solo ship performs the Jam action choosing the nearest enemy ship with a target lock</li><li>If the solo ship does not have an Evade token, it performs the Evade action</li><li>If the solo ship does not have a Focus token, it performs the Focus action</li><li>If the solo ship does not have a Calculate token, it performs a Calculate action</li></ol>');
        break;
    }
}