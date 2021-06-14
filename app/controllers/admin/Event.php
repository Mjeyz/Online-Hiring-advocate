<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Event extends MY_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('model_event');
    }

    //show event page
    public function index() {
        $join = array(
            array(
                'table' => 'app_event_category',
                'condition' => 'app_event_category.id=app_event.category_id',
                'jointype' => 'left'
            )
        );
        if ($this->login_type == 'V') {
            $event = $this->model_event->getData('', 'app_event.*,app_event_category.title as category_title', "app_event.created_by='$this->login_id'", $join);
        } else {
            $event = $this->model_event->getData('', 'app_event.*,app_event_category.title as category_title', '', $join);
        }
        $data['event_data'] = $event;
        $data['title'] = translate('manage') . " " . translate('event');
        $this->load->view('admin/event-list', $data);
    }

    //show add event form
    public function add_event() {
        if (isset($this->login_type) && $this->login_type == 'A') {
            check_mandatory();
        }
        $data['category_data'] = $this->model_event->getData('app_event_category', '*', "status='A'");
        $data['city_data'] = $this->model_event->getData('app_city', '*', "city_status='A'");
        $data['title'] = translate('add') . " " . translate('event');
        $this->load->view('admin/manage-event', $data);
    }

    //show edit event form
    public function update_event($id) {
        $event = $this->model_event->getData("app_event", "*", "id='$id'");
        if (isset($event[0]) && !empty($event[0])) {
            $data['event_data'] = $event[0];
            $data['category_data'] = $this->model_event->getData('app_event_category', '*', "status='A'");
            $data['city_data'] = $this->model_event->getData('app_city', '*', "city_status='A'");
            $loc_city_id = $event[0]['city'];
            $data['location_data'] = $this->model_event->getData('app_location', '*', "loc_city_id='$loc_city_id' AND loc_status='A'");
            $data['title'] = translate('update') . " " . translate('event');
            $this->load->view('admin/manage-event', $data);
        } else {
            show_404();
        }
    }

    //add/edit an event
    public function save_event() {
        $event_id = (int) $this->input->post('id', true);
        $hidden_image = $this->input->post('hidden_image', true);
        $this->form_validation->set_rules('name', '', 'required');
        $this->form_validation->set_rules('description', '', 'required');
        $this->form_validation->set_rules('days[]', '', 'required');
        $this->form_validation->set_rules('start_time', '', 'required');
        $this->form_validation->set_rules('end_time', '', 'required');
        $this->form_validation->set_rules('per_allow', '', 'required');
        $this->form_validation->set_rules('city', '', 'required');
        $this->form_validation->set_rules('location', '', 'required');
        $this->form_validation->set_rules('status', '', 'required');
        $this->form_validation->set_rules('payment_type', '', 'required');
        $this->form_validation->set_rules('category_id', '', 'required');
        $this->form_validation->set_message('required', translate('required_message'));
        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');
        if ($this->form_validation->run() == false) {
            if ($event_id > 0) {
                $this->update_event($event_id);
            } else {
                $this->add_event();
            }
        } else {



            $data['title'] = $this->input->post('name', true);
            $data['description'] = $this->input->post('description', true);
            $data['days'] = implode(",", $this->input->post('days[]', true));
            $data['start_time'] = $this->input->post('start_time', true);
            $data['end_time'] = $this->input->post('end_time', true);
            $data['slot_time'] = $this->input->post('slot_time', true);
            $data['monthly_allow'] = $this->input->post('per_allow', true);
            $data['city'] = $this->input->post('city', true);
            $data['location'] = $this->input->post('location', true);
            $data['payment_type'] = $this->input->post('payment_type', true);
            $data['price'] = $this->input->post('price', true);
            $data['category_id'] = $this->input->post('category_id', true);
            $data['status'] = $this->input->post('status', true);
            $data['discount'] = $this->input->post('discount', true);
            $data['from_date'] = $this->input->post('from_date', true) != '' ? date("Y-m-d", strtotime($this->input->post('from_date', true))) : '';
            $data['to_date'] = $this->input->post('to_date', true) != '' ? date("Y-m-d", strtotime($this->input->post('to_date', true))) : '';
            $data['discounted_price'] = $this->input->post('discounted_price', true);
            $data['seo_description'] = $this->input->post('seo_description', true);
            $data['seo_keyword'] = $this->input->post('seo_keyword', true);
            $data['is_display_address'] = $this->input->post('is_display_address', true);
            $data['address'] = $this->input->post('address', true);
            $data['latitude'] = $this->input->post('event_latitude', true);
            $data['longitude'] = $this->input->post('event_longitude', true);



            if (isset($_FILES['image']) && !empty(array_filter($_FILES['image']['name']))) {
                $filesCount = count($_FILES['image']['name']);

                $thumb_config['image_library'] = 'gd2';
                $thumb_config['maintain_ratio'] = TRUE;
                $thumb_config['width'] = 350;
                $thumb_config['height'] = 230;
                $thumb_config['create_thumb'] = TRUE;
                $thumb_config['thumb_marker'] = '_thumb';

                for ($i = 0; $i < $filesCount; $i++) {

                    $_FILES['userFile']['name'] = $_FILES['image']['name'][$i];
                    $_FILES['userFile']['type'] = $_FILES['image']['type'][$i];
                    $_FILES['userFile']['tmp_name'] = $_FILES['image']['tmp_name'][$i];
                    $_FILES['userFile']['error'] = $_FILES['image']['error'][$i];
                    $_FILES['userFile']['size'] = $_FILES['image']['size'][$i];

                    $uploadPath = dirname(BASEPATH) . "/" . uploads_path . '/event';
                    $config['upload_path'] = $uploadPath;
                    $config['allowed_types'] = 'gif|jpg|png|jpeg';
                    $temp = explode(".", $_FILES["userFile"]["name"]);
                    $name = uniqid();
                    $new_name = $name . '.' . end($temp);

                    $config['file_name'] = $new_name;

                    $this->load->library('upload', $config);
                    $this->upload->initialize($config);
                    if ($this->upload->do_upload('userFile')) {
                        $fileData = $this->upload->data();
                        $image[] = $fileData['file_name'];

                        $source_path = $uploadPath . '/' . $new_name;
                        $dest = $uploadPath . '/'.$new_name;
                        
                        $thumb_config['source_image'] = $source_path;
                        $thumb_config['new_image'] = $dest;
                        $this->load->library('image_lib');
                        $this->image_lib->initialize($thumb_config);
                        if (!$this->image_lib->resize()) {
                            echo $this->image_lib->display_errors();
                        }
                        // clear //
                        $this->image_lib->clear();
                    }
                }
                if ($hidden_image != '' && $hidden_image != 'null') {
                    $data['image'] = json_encode(array_filter(array_merge(json_decode($hidden_image), $image)));
                } else {
                    $data['image'] = json_encode($image);
                }
            }
            if (isset($_FILES['seo_og_image']) && $_FILES['seo_og_image']['name'] != '') {
                $uploadPath = dirname(BASEPATH) . "/" . uploads_path . '/event/seo_image/';
                $banner_tmp_name = $_FILES["seo_og_image"]["tmp_name"];
                $banner_temp = explode(".", $_FILES["seo_og_image"]["name"]);
                $nanner_name = uniqid();
                $new_banner_name = $nanner_name . '.' . end($banner_temp);
                $data['seo_og_image'] = $new_banner_name;
                move_uploaded_file($banner_tmp_name, "$uploadPath/$new_banner_name");
            }
            if ($event_id > 0) {
                $id = $this->model_event->update('app_event', $data, "id=$event_id");
                $this->session->set_flashdata('msg', translate('event_update'));
                $this->session->set_flashdata('msg_class', 'success');
            } else {
                $data['created_by'] = $this->login_id;
                $id = $this->model_event->insert('app_event', $data);
                $this->session->set_flashdata('msg', translate('event_insert'));
                $this->session->set_flashdata('msg_class', 'success');
            }
            if ($this->login_type == 'V' && $event_id == 0) {
                $package_id = $this->model_event->get_current_membership($this->login_id);
                $sql = "UPDATE app_membership_history SET remaining_event = remaining_event - 1 WHERE package_id = '$package_id' AND customer_id='$this->login_id'";
                $this->db->query($sql);
                $check_membership = $this->model_event->getData('app_membership_history', 'remaining_event', "package_id = '$package_id' AND customer_id='$this->login_id'");
                if ($check_membership[0]['remaining_event'] == 0) {
                    $sql = "UPDATE app_membership_history SET status = 'E' WHERE package_id = '$package_id' AND customer_id='$this->login_id'";
                    $this->db->query($sql);
                }
            }
            $folder_url = isset($this->login_type) && $this->login_type == 'V' ? 'vendor' : 'admin';
            redirect($folder_url . '/manage-event', 'redirect');
        }
    }

    //delete an event
    public function delete_event($id) {
        $appointment = $this->model_event->getData('app_event_book', 'id', "event_id='$id'");
        if (isset($appointment) && count($appointment) > 0) {
            $this->session->set_flashdata('msg', translate('event_book_Appointment'));
            $this->session->set_flashdata('msg_class', 'failure');
            echo 'false';
            exit;
        }
        $this->model_event->delete('app_event', 'id=' . $id);
        $this->session->set_flashdata('msg', translate('event_delete'));
        $this->session->set_flashdata('msg_class', 'success');
        echo 'true';
        exit;
    }

    //get location
    public function get_location($city_id) {
        $location_data = $this->model_event->getData('app_location', '*', "loc_city_id='$city_id' AND loc_status='A'");
        $html = '<option value="">' . translate('select_location') . '</option>';
        if (isset($location_data) && count($location_data) > 0) {
            foreach ($location_data as $value) {
                $html .= '<option value="' . $value['loc_id'] . '">' . $value['loc_title'] . '</option>';
            }
        }
        echo $html;
    }

    //delete event image
    public function delete_event_image() {
        $image = $this->input->post('i');
        $event_id = $this->input->post('id');
        $hidden_image = json_decode($this->input->post('h'));

        if (file_exists(dirname(FCPATH) . "/" . $image)) {
            if (unlink(dirname(FCPATH) . "/" . $image)) {
                $key = array_search(basename($image), $hidden_image);
                unset($hidden_image[$key]);
                $new_array = array_values($hidden_image);
                $data['image'] = json_encode($new_array);
                $id = $this->model_event->update('app_event', $data, "id=$event_id");
                if ($id) {
                    echo json_encode($new_array);
                } else {
                    echo 'false';
                }
            } else {
                echo 'false';
            }
        } else {
            $key = array_search(basename($image), $hidden_image);
            unset($hidden_image[$key]);
            $new_array = array_values($hidden_image);
            $data['image'] = json_encode($new_array);
            $id = $this->model_event->update('app_event', $data, "id=$event_id");
            if ($id) {
                echo json_encode($new_array);
            } else {
                echo 'false';
            }
        }
        exit;
    }

    //show event category page
    public function event_category() {
        $event = $this->model_event->getData('app_event_category', '*');
        $data['category_data'] = $event;
        $data['title'] = translate('manage_event_category');
        $this->load->view('admin/event-category-list', $data);
    }

    //show add event category form
    public function add_category() {
        $data['title'] = translate('add_event_category');
        $this->load->view('admin/manage-event-category', $data);
    }

    //show edit event category form
    public function update_category($id) {
        $cond = 'id=' . $id;
        if ($this->session->userdata('Type_Admin') != "A") {
            $cond .= 'AND created_by=' . $this->login_id;
        }
        $category = $this->model_event->getData("app_event_category", "*", $cond);
        if (isset($category) && count($category) > 0) {
            $data['category_data'] = $category[0];
            $data['title'] = translate('update') . " " . translate('city');
            $this->load->view('admin/manage-event-category', $data);
        } else {
            show_404();
        }
    }

    public function validate_image() {
        $allowedExts = array("image/gif", "image/jpeg", "image/jpg", "image/png");
        if (!empty($_FILES["event_category_image"]["type"])) {
            if (in_array($_FILES["event_category_image"]["type"], $allowedExts)) {
                return true;
            } else {
                $this->form_validation->set_message('validate_image', 'Please select valid image.');
                return false;
            }
        } else {
            $this->form_validation->set_message('validate_image', 'The Category Image field is required.');
            return false;
        }
    }

    public function validate_image_edit() {
        $allowedExts = array("image/gif", "image/jpeg", "image/jpg", "image/png");
        if (empty($_FILES["event_category_image"]["type"])) {
            return true;
        } else {
            if (in_array($_FILES["event_category_image"]["type"], $allowedExts)) {
                return true;
            } else {
                $this->form_validation->set_message('validate_image_edit', 'Please select valid image.');
                return false;
            }
        }
    }

    //add/edit an event category
    public function save_category() {
        $hidden_main_image = $this->input->post('hidden_category_image', true);
        $id = (int) $this->input->post('id', true);
        $this->form_validation->set_rules('title', 'title', 'required|is_unique[app_event_category.title.id.' . $id . ']');
        if ($id > 0) {
            $this->form_validation->set_rules('event_category_image', translate('event_category_image'), 'callback_validate_image_edit');
        } else {
            $this->form_validation->set_rules('event_category_image', translate('event_category_image'), 'callback_validate_image');
        }
        $this->form_validation->set_rules('status', 'Status', 'required');


        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');
        if ($this->form_validation->run() == false) {
            if ($id > 0) {
                $this->update_category($id);
            } else {
                $this->add_category();
            }
        } else {
            $data['title'] = $this->input->post('title', true);
            $data['status'] = $this->input->post('status', true);
            $data['created_by'] = $this->login_id;

            $uploadPath = dirname(BASEPATH) . "/" . uploads_path . '/category';

            if (isset($_FILES['event_category_image']["name"]) && $_FILES['event_category_image']["name"] != "") {
                $tmp_name = $_FILES["event_category_image"]["tmp_name"];
                $temp = explode(".", $_FILES["event_category_image"]["name"]);
                $newfilename = (uniqid()) . '.' . end($temp);
                move_uploaded_file($tmp_name, "$uploadPath/$newfilename");
                $data['event_category_image'] = $newfilename;

                $config['image_library'] = 'gd2';
                $config['source_image'] = $uploadPath . "/" . $newfilename;
                $config['create_thumb'] = FALSE;
                $config['maintain_ratio'] = FALSE;
                $config['width'] = 40;
                $config['height'] = 40;

                $this->load->library('image_lib', $config);

                $this->image_lib->resize();

                if ($hidden_main_image != "" && $hidden_main_image != NULL) {
                    unlink($uploadPath . "/" . $hidden_main_image);
                }
            }

            if ($id > 0) {
                $data['updated_on'] = date("Y-m-d H:i:s");
                $this->model_event->update('app_event_category', $data, "id=$id");
                $this->session->set_flashdata('msg', translate('event_category_update'));
                $this->session->set_flashdata('msg_class', 'success');
            } else {
                $data['created_on'] = date("Y-m-d H:i:s");
                $id = $this->model_event->insert('app_event_category', $data);
                if ($id) {
                    $this->session->set_flashdata('msg', translate('event_category_insert'));
                    $this->session->set_flashdata('msg_class', 'success');
                } else {
                    $this->session->set_flashdata('msg', "Unable to create category.");
                    $this->session->set_flashdata('msg_class', 'failure');
                }
            }
            $folder_url = isset($this->login_type) && $this->login_type == 'V' ? 'vendor' : 'admin';
            redirect($folder_url . '/event-category', 'redirect');
        }
    }

    //delete an event category
    public function delete_category($id) {
        $event_data = $this->model_event->getData('app_event', 'id', "category_id='$id'");
        if (isset($event_data) && count($event_data) > 0) {
            $this->session->set_flashdata('msg', translate('event_category_exist'));
            $this->session->set_flashdata('msg_class', 'failure');
            echo 'false';
            exit(0);
        } else {
            $this->model_event->delete('app_event_category', "id='$id' AND created_by='$this->login_id'");
            $this->session->set_flashdata('msg', translate('event_category_delete'));
            $this->session->set_flashdata('msg_class', 'success');
            echo 'true';
            exit;
        }
    }

    public function check_event_category_title() {
        $id = (int) $this->input->post('id', true);
        $title = $this->input->post('title');
        if (isset($id) && $id > 0) {
            $where = "title='$title' AND id!='$id'";
        } else {
            $where = "title='$title'";
        }
        $check_title = $this->model_event->getData("app_event_category", "title", $where);
        if (isset($check_title) && count($check_title) > 0) {
            echo "false";
            exit;
        } else {
            echo "true";
            exit;
        }
    }

    //delete event seo image
    public function delete_event_seo_image() {
        $image = $this->input->post('i');
        $event_id = $this->input->post('id');
        if (file_exists((FCPATH) . "/" . $image)) {
            if (unlink((FCPATH) . "/" . $image)) {
                $data['seo_og_image'] = "";
                $id = $this->model_event->update('app_event', $data, "id=$event_id");
                echo 'success';
            } else {
                echo 'false';
            }
        }
        exit;
    }

}

?>