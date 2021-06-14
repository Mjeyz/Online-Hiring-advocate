<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
        <meta name="viewport" content="width=device-width">
        <link rel="icon" type="image/x-icon" href="<?php echo get_fevicon(); ?>"/>
        <title><?php
            echo ucfirst(get_CompanyName());
            if (!empty($title))
                echo " | " . $title;
            ?></title>

        <link href="<?php echo $this->config->item('css_url'); ?>datatables.min.css" rel="stylesheet"/>
        <?php include VIEWPATH . 'admin/css.php'; ?>
        <script src="<?php echo $this->config->item('js_url'); ?>jquery-3.2.1.min.js"></script>        
        <script type="text/javascript" src="<?php echo $this->config->item('js_url'); ?>jquery.dataTables.min.js"></script>
        <script type="text/javascript" src="<?php echo $this->config->item('js_url'); ?>datatables.min.js"></script>
        <script src="<?php echo $this->config->item('js_url'); ?>jquery.validate.min.js" type="text/javascript"></script>

        <!--loader-->
        <link href="<?php echo $this->config->item('assets_url'); ?>loader/css/preloader.css" rel="stylesheet">
        <script src="<?php echo $this->config->item('assets_url'); ?>loader/js/jquery.preloader.min.js"></script>
        <script>
            var base_url = '<?php echo base_url() ?>';
            var csrf_token_name = '<?php echo $this->security->get_csrf_hash(); ?>';
        </script>
    </head>
    <body>
        <div id="loadingmessage" class="loadingmessage"></div>
        <?php
        include VIEWPATH . 'admin/sidebar.php';
///////////////////////////////////////////////////////////
        $url_segment = trim($this->uri->segment(1));
        $profile_active = "";
        $wallet_active = "";
        $change_password_active = "";
        $profile_Arr = array("admin-profile",);
        $wallet_Arr = array("wallet");

        $admin_id = (int) $this->session->userdata('ADMIN_ID');
        $this->db->select('my_wallet as total');
        $this->db->where('id', $admin_id);
        $my_wallet = $this->db->get('app_admin')->row_array();


        $change_passwordArr = array("admin-update-password-action");
        if (isset($url_segment) && in_array($url_segment, $profile_Arr)) {
            $profile_active = "active";
        } elseif (isset($url_segment) && in_array($url_segment, $change_passwordArr)) {
            $change_password_active = "active";
        } elseif (isset($url_segment) && in_array($url_segment, $wallet_Arr)) {
            $wallet_active = "active";
        }
        ?>
        <!-- Start Topbar -->
        <nav class="nav navbar py-3 white">
            <div class="container-fluid pr-0">
                <a href="" class="db-close-button"></a>
                <a href="<?php echo base_url('admin/logout') ?>" class="db-options-button">
                    <img src="<?php echo base_url() . img_path; ?>/svg/back-icon.png" alt="db-list-right">
                </a>
                <div class="db-item">
                    <div class="db-side-bar-handler">
                        <img src="<?php echo base_url() . img_path; ?>/sidebar/db-list-left.png" alt="db-list-left">
                    </div>
                </div>
                <ul class="nav navbar-nav nav-flex-icons ml-auto sidbar_ulnav top_navbar">
                    <!-- Dropdown -->
                    <li class="nav-item">
                        <a  href="<?php echo base_url('admin/profile') ?>" class="<?php echo $profile_active; ?>  nav-link waves-effect text-muted"><i class="fa fa-user"></i> <span class="clearfix d-none d-sm-inline-block"><?php echo translate('profile_setting'); ?></span></a>
                    </li>
                    <li class="nav-item">
                        <a  href="javascript:void(0)" class="<?php echo $wallet_active; ?>  nav-link waves-effect text-muted"><i class="fa fa-dollar"></i> <span class="clearfix d-none d-sm-inline-block"><?php echo translate('earnings'); ?> $<?php echo isset($my_wallet['total']) ? $my_wallet['total'] : 0 ?></span></a>
                    </li>
                    <li class="nav-item">
                        <a  href="<?php echo base_url('admin/update-password-action') ?>" class="<?php echo $change_password_active; ?> nav-link waves-effect text-muted"><i class="fa fa-key"></i> <span class="clearfix d-none d-sm-inline-block"><?php echo translate('change_password'); ?></span></a>
                    </li>
                    <li class="nav-item">
                        <a href="<?php echo base_url('admin/logout') ?>" class="nav-link waves-effect text-muted">
                            <i class="fa fa-sign-out"></i>
                            <span class="clearfix d-none d-sm-inline-block"><?php echo translate('logout'); ?></span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>