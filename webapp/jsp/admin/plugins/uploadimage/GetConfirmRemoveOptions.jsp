<%@ page errorPage="../../ErrorPage.jsp" %>


<jsp:useBean id="manageuploadimage" scope="session" class="fr.paris.lutece.plugins.uploadimage.web.ManageUploadimageJspBean" />

<% 
response.sendRedirect( manageuploadimage.getConfirmRemoveOption( request ) );
%>
