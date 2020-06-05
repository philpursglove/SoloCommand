﻿// TypeScript source code
$('#NextShipButton').click(function() {
    $('#MovementDescription').text('');
    $('#ActionDescription').text('');
    $('#AttitudeDescription').text('');
    $('#EvadeResult').removeClass();
    $('#AttackResult').removeClass();
    $('#TallyLocation').val(-1);
});

enum DiceResult {
    Blank = 1,
    Focus = 2,
    Evade = 3,
    Hit = 4,
    Crit = 5
}

enum TallyLocation {
    Blank = -1,
    Bullseye = 0,
    Front = 1,
    Side = 2,
    Rear = 3
}

$('#DetermineApproachButton').click(function () {
    let tally = parseInt((document.getElementById('TallyLocation') as HTMLSelectElement).value);

    if (tally === TallyLocation.Blank) {
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
        case TallyLocation.Bullseye:

            switch (evade) {
                case DiceResult.Blank:
                    switch (attack) {
                        case DiceResult.Blank:
                            $('#MovementDescription').text('2-speed straight maneuver');
                            break;
                        case DiceResult.Focus:
                            $('#MovementDescription').text('Average straight maneuver');
                            break;
                        case DiceResult.Hit:
                            $('#MovementDescription').text('Fastest straight maneuver');
                            break;
                        case DiceResult.Crit:
                            $('#MovementDescription').text('Fastest advanced maneuver');
                            break;
                    }
                    break;
                case DiceResult.Focus:
                    switch (attack) {
                        case DiceResult.Blank:
                            $('#MovementDescription').text('Slowest blue straight maneuver');
                            break;
                        case DiceResult.Focus:
                            $('#MovementDescription').text('Slowest blue straight maneuver');
                            break;
                        case DiceResult.Hit:
                            $('#MovementDescription').text('Average blue straight maneuver');
                            break;
                        case DiceResult.Crit:
                            $('#MovementDescription').text('Fastest blue straight maneuver');
                            break;
                    }
                    break;
                case DiceResult.Evade:
                    switch (attack) {
                        case DiceResult.Blank:
                            $('#MovementDescription').text('Fastest turn maneuver toward the nearest obstacle');
                            break;
                        case DiceResult.Focus:
                            $('#MovementDescription').text('Slowest blue bank maneuver away from the nearest obstacle');
                            break;
                        case DiceResult.Hit:
                            $('#MovementDescription').text('Slowest straight, stationary or reverse maneuver away from the nearest obstacle');
                            break;
                        case DiceResult.Crit:
                            $('#MovementDescription').text('Slowest blue bank maneuver away from the nearest obstacle');
                            break;
                    }
                    break;
            }


            break;
        case TallyLocation.Front:
            switch (evade) {
                case DiceResult.Blank:
                    switch (attack) {
                        case DiceResult.Blank:
                            $('#MovementDescription').text('2-speed straight maneuver');
                            break;
                        case DiceResult.Focus:
                            $('#MovementDescription').text('Slowest turn maneuver towards the Tally');
                            break;
                        case DiceResult.Hit:
                            $('#MovementDescription').text('Fastest turn maneuver towards the Tally');
                            break;
                        case DiceResult.Crit:
                            $('#MovementDescription').text('Fastest advanced maneuver away from the Tally');
                            break;
                    }
                    break;
                case DiceResult.Focus:
                    switch (attack) {
                        case DiceResult.Blank:
                            $('#MovementDescription').text('Slowest blue straight maneuver');
                            break;
                        case DiceResult.Focus:
                            $('#MovementDescription').text('Average blue straight maneuver');
                            break;
                        case DiceResult.Hit:
                            $('#MovementDescription').text('Slowest blue bank or turn maneuver towards the Tally');
                            break;
                        case DiceResult.Crit:
                            $('#MovementDescription').text('Fastest blue bank or turn towards the Tally');
                            break;
                    }
                    break;
                case DiceResult.Evade:
                    switch (attack) {
                        case DiceResult.Blank:
                            $('#MovementDescription').text('Fastest bank towards the nearest obstacle');
                            break;
                        case DiceResult.Focus:
                            $('#MovementDescription').text('Slowest bank away from the nearest obstacle');
                            break;
                        case DiceResult.Hit:
                            $('#MovementDescription').text('Slowest straight, stationary or reverse maneuver');
                            break;
                        case DiceResult.Crit:
                            $('#MovementDescription').text('Slowest blue bank maneuver away from the nearest obstacle');
                            break;
                    }
                    break;
            }
            break;
        case TallyLocation.Side:
            switch (evade) {
                case DiceResult.Blank:
                    switch (attack) {
                        case DiceResult.Blank:
                            $('#MovementDescription').text('2-speed straight maneuver');
                            break;
                        case DiceResult.Focus:
                            $('#MovementDescription').text('Fastest turn maneuver towards the Tally');
                            break;
                        case DiceResult.Hit:
                            $('#MovementDescription').text('Slowest advanced maneuver away from the Tally');
                            break;
                        case DiceResult.Crit:
                            $('#MovementDescription').text('Fastest advanced maneuver towards the Tally');
                            break;
                    }
                    break;
                case DiceResult.Focus:
                    switch (attack) {
                        case DiceResult.Blank:
                            $('#MovementDescription').text('Slowest blue bank or turn maneuver towards the Tally');
                            break;
                        case DiceResult.Focus:
                            $('#MovementDescription').text('Slowest blue bank or turn maneuver towards the Tally');
                            break;
                        case DiceResult.Hit:
                            $('#MovementDescription').text('Average blue bank or turn maneuver towards the Tally');
                            break;
                        case DiceResult.Crit:
                            $('#MovementDescription').text('Fastest blue bank or turn towards the Tally');
                            break;
                    }
                    break;
                case DiceResult.Evade:
                    switch (attack) {
                        case DiceResult.Blank:
                            $('#MovementDescription').text('Fastest bank towards the Tally');
                            break;
                        case DiceResult.Focus:
                            $('#MovementDescription').text('Slowest turn towards the Tally');
                            break;
                        case DiceResult.Hit:
                            $('#MovementDescription').text('Slowest turn towards the Tally');
                            break;
                        case DiceResult.Crit:
                            $('#MovementDescription').text('Fastest advanced maneuver away from the nearest obstacle');
                            break;
                    }
                    break;
            }

            break;
        case TallyLocation.Rear:
            switch (evade) {
                case DiceResult.Blank:
                    switch (attack) {
                        case DiceResult.Blank:
                            $('#MovementDescription').text('2-speed straight maneuver');
                            break;
                        case DiceResult.Focus:
                            $('#MovementDescription').text('Fastest advanced maneuver towards the Tally');
                            break;
                        case DiceResult.Hit:
                            $('#MovementDescription').text('Fastest advanced maneuver towards the Tally');
                            break;
                        case DiceResult.Crit:
                            $('#MovementDescription').text('Slowest advanced maneuver towards the Tally');
                            break;
                    }
                    break;
                case DiceResult.Focus:
                    switch (attack) {
                        case DiceResult.Blank:
                            $('#MovementDescription').text('Fastest blue bank or turn maneuver towards the Tally');
                            break;
                        case DiceResult.Focus:
                            $('#MovementDescription').text('Fastest blue bank or turn maneuver away from the Tally');
                            break;
                        case DiceResult.Hit:
                            $('#MovementDescription').text('Slowest blue bank or turn maneuver towards the Tally');
                            break;
                        case DiceResult.Crit:
                            $('#MovementDescription').text('Slowest blue bank or turn away from the Tally');
                            break;
                    }
                    break;
                case DiceResult.Evade:
                    switch (attack) {
                        case DiceResult.Blank:
                            $('#MovementDescription').text('Fastest straight');
                            break;
                        case DiceResult.Focus:
                            $('#MovementDescription').text('Fastest turn away from the nearest obstacle');
                            break;
                        case DiceResult.Hit:
                            $('#MovementDescription').text('Fastest turn towards the nearest obstacle');
                            break;
                        case DiceResult.Crit:
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
            return DiceResult.Blank;
        case 3:
        case 4:
            return DiceResult.Focus;
        case 5:
        case 6:
        case 7:
            return DiceResult.Evade;
        default:
    }

}

function rollAttackDie() {
    var die = rollDie();
    switch (die) {
        case 0:
        case 1:
            return DiceResult.Blank;
        case 2:
        case 3:
            return DiceResult.Focus;
        case 4:
        case 5:
        case 6:
            return DiceResult.Hit;
        case 7:
            return DiceResult.Crit;
        default:
    }
}

function showEvade(evade : DiceResult) {
    $('#EvadeResult').removeClass();
    $('#EvadeApproach').attr('title', '');
    switch (evade) {
        case DiceResult.Blank:
            $('#EvadeResult').addClass('xwing-miniatures-font xwing-miniatures-font-condition-outline');
            $('#EvadeApproach').attr('title', 'Blank');
            break;
        case DiceResult.Focus:
            $('#EvadeResult').addClass('xwing-miniatures-font xwing-miniatures-font-focus');
            $('#EvadeApproach').attr('title', 'Focus');
            break;
        case DiceResult.Evade:
            $('#EvadeResult').addClass('xwing-miniatures-font xwing-miniatures-font-evade');
            $('#EvadeApproach').attr('title', 'Evade');
            break;

    }
};

function showAttack(attack : DiceResult) {
    $('#AttackResult').removeClass();
    $('#AttackApproach').attr('title', '');
    switch (attack) {
        case DiceResult.Blank:
            $('#AttackResult').addClass('xwing-miniatures-font xwing-miniatures-font-condition-outline');
            $('#AttackApproach').attr('title', 'Blank');
            break;
        case DiceResult.Focus:
            $('#AttackResult').addClass('xwing-miniatures-font xwing-miniatures-font-focus');
            $('#AttackApproach').attr('title', 'Focus');
            break;
        case DiceResult.Hit:
            $('#AttackResult').addClass('xwing-miniatures-font xwing-miniatures-font-hit');
            $('#AttackApproach').attr('title', 'Hit');
            break;
        case DiceResult.Crit:
            $('#AttackResult').addClass('xwing-miniatures-font xwing-miniatures-font-crit');
            $('#AttackApproach').attr('title', 'Crit');
            break;
    }
};

function showAttitude(evade : DiceResult) {
    switch (evade) {
        case DiceResult.Blank:
            $('#AttitudeDescription').text('Offensive');
            break;
        case DiceResult.Focus:
            $('#AttitudeDescription').text('Balanced');
            break;
        case DiceResult.Evade:
            $('#AttitudeDescription').text('Defensive');
            break;
    }
}

function showAction(evade : DiceResult) {
    $('#ActionDescription').html('');
    switch (evade) {
    case DiceResult.Blank:
        $('#ActionDescription').html('<ol><li>If no enemy ship is in any of the solo ships firing arcs, it performs a Barrel Roll, Boost or Rotate Turret action that will cause at least one enemy ship to be in any of its firing arcs</li><li>If the solo ship is equipped with a special weapon with the Target Lock header, it performs the Target Lock action choosing the nearest enemy ship in the firing arc and range of that special weapon</li><li>The solo ship performs the Target Lock action, choosing the nearest enemy ship in its firing arc. If no enemy ship is in the firing arc, it chooses the nearest enemy ship</li><li>If no enemy ship is in the solo ships firing arc and any of its Torpedo, Missile or Device upgrades have one or more inactive charges, it performs the Reload action</li><li>If the solo ship has no Focus token, it performs the Focus action</li><li>If the solo ship does not have a Calculate token, it performs the Calculate action</li></ol>');
        break;
    case DiceResult.Focus:
        $('#ActionDescription').html('<ol><li>The solo ship performs a Coordinate action, choosing the nearest friendly ship without Coordinate in its action bar that can perform an action</li><li>If there is an obstacle in the solo ships bullseye arc at range 0-2, it performs a barrel or boost action away from the obstacle</li><li>If the solo ship does not have a Focus token it performs the Focus action</li><li>If the solo ship does not have a Calculate token it performs the Calculate action</li></ol>');

        break;
    case DiceResult.Evade:
        $('#ActionDescription').html(
            '<ol><li>If the solo ship is in at least 1 enemy ships firing arc, it performs a barrel roll, boost or SLAM action that will move it out of at least 1 enemy ships firing arc.</li><li>The solo ship performs the Reinforce action, reinforcing the full arc that the most enemy ships are in</li><li>The solo ship performs the Jam action choosing the nearest enemy ship with a target lock</li><li>If the solo ship does not have an Evade token, it performs the Evade action</li><li>If the solo ship does not have a Focus token, it performs the Focus action</li><li>If the solo ship does not have a Calculate token, it performs a Calculate action</li></ol>');
        break;
    }
}