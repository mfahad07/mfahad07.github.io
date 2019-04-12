// ******* create the fuzzy variables ********
//for input X
varX = new FuzzyVariable();
//add some fuzzy sets to it
varX.NH = new FuzzySet(-0.25,0.0,0.25);
varX.NL = new FuzzySet(0.0,0.25,0.5);
varX.Z = new FuzzySet(0.25,0.5,0.75);
varX.PL = new FuzzySet(0.5,0.75,1.0);
varX.PH = new FuzzySet(0.75,1.0,1.25);

varDX = new FuzzyVariable();
//add some fuzzy sets to it
varDX.NH = new FuzzySet(-0.25,0.0,0.25);
varDX.NL = new FuzzySet(0.0,0.25,0.5);
varDX.Z = new FuzzySet(0.25,0.5,0.75);
varDX.PL = new FuzzySet(0.5,0.75,1.0);
varDX.PH = new FuzzySet(0.75,1.0,1.25);


varY = new FuzzyVariable();
//add some fuzzy sets to it
varY.NH = new FuzzySet(-1.5,-1.0,-0.5);
varY.NL = new FuzzySet(-1.0,-0.5,0.0);
varY.Z = new FuzzySet(-0.5,0.0,0.5);
varY.PL = new FuzzySet(0.0,0.5,1.0);
varY.PH = new FuzzySet(0.5,1.0,1.5);

varY.NH.rule = new FuzzyRule();
varY.NH.rule.addExpr([varX.PL,varDX.NH]);
varY.NH.rule.addExpr([varX.PH,varDX.NH]);
varY.NH.rule.addExpr([varX.PL,varDX.NL]);
varY.NH.rule.addExpr([varX.PH,varDX.NL]);
varY.NH.rule.addExpr([varX.PH,varDX.Z]);

varY.NL.rule = new FuzzyRule();
varY.NL.rule.addExpr([varX.NL,varDX.NH]);
varY.NL.rule.addExpr([varX.Z,varDX.NH]);
varY.NL.rule.addExpr([varX.Z,varDX.NL]);
varY.NL.rule.addExpr([varX.PL,varDX.Z]);
varY.NL.rule.addExpr([varX.PH,varDX.PL]);

varY.Z.rule = new FuzzyRule();
varY.Z.rule.addExpr([varX.NH,varDX.NH]);
varY.Z.rule.addExpr([varX.NL,varDX.NL]);
varY.Z.rule.addExpr([varX.Z,varDX.Z]);
varY.Z.rule.addExpr([varX.PL,varDX.PL]);
varY.Z.rule.addExpr([varX.PH,varDX.PH]);

varY.PL.rule = new FuzzyRule();
varY.PL.rule.addExpr([varX.NH,varDX.NL]);
varY.PL.rule.addExpr([varX.NL,varDX.Z]);
varY.PL.rule.addExpr([varX.Z,varDX.PL]);
varY.PL.rule.addExpr([varX.Z,varDX.PH]);
varY.PL.rule.addExpr([varX.PL,varDX.PH]);

varY.PH.rule = new FuzzyRule();
varY.PH.rule.addExpr([varX.NH,varDX.Z]);
varY.PH.rule.addExpr([varX.NH,varDX.PL]);
varY.PH.rule.addExpr([varX.NL,varDX.PL]);
varY.PH.rule.addExpr([varX.NH,varDX.PH]);
varY.PH.rule.addExpr([varX.NL,varDX.PH]);