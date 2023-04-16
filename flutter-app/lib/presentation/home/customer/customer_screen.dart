import 'package:flutter/material.dart';
import 'package:flutter_web_navigation/utils/drawer_util.dart';

import '../../components/custom/custom_outlined_button.dart';
import '../../components/home/home_content.dart';

const String featureName = "CUSTOMER";

class CustomerScreen extends StatefulWidget {
  final String routeName;
  final GlobalKey<ScaffoldState> parentScaffoldKey;

  const CustomerScreen(
      {Key? key, required this.routeName, required this.parentScaffoldKey})
      : super(key: key);

  @override
  State<CustomerScreen> createState() => _CustomScreenState();
}

class _CustomScreenState extends State<CustomerScreen> {
  Widget? render;

  @override
  Widget build(BuildContext context) {
    return Column(children: <Widget>[
      // button container.
      Container(
          alignment: Alignment.topLeft,
          margin: const EdgeInsets.fromLTRB(100, 40, 0, 0),
          child: CustomOutlinedButton(
              buttonName: "+ ADD CUSTOMER",
              color: Colors.red,
              callback: _onAddCustomer)),

      // main left and right panels.
      const HomeContent(featureName: featureName)
    ]);
  }

  // show ui for adding customer information.
  _onAddCustomer() => openEndDrawerUi(widget.parentScaffoldKey);
}